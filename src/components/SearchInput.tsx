import { AutoComplete, Input } from 'antd'
import { useCatalogueItemContext } from 'context/CatalogueItemContext'
import { useSearchContext } from 'context/SearchContext'
import { useNavigate } from 'react-router-dom'
import type { SearchOptionsType } from 'types/SearchFilters.type'

interface Props {
	onSearchBtnClick: (searchValue: string) => void
	path: string
	inputWidth?: string
}

const SearchInput = ({ onSearchBtnClick, path, inputWidth }: Props) => {
	const navigate = useNavigate()
	const { filteredCatalogueItems } = useCatalogueItemContext()
	const { searchInput, setSearchInput, searchOptions, setSearchOptions } =
		useSearchContext()

	const onSearch = (searchValue: string) => {
		if (searchValue.length === 0) {
			setSearchOptions([])
			return
		}

		const options = filteredCatalogueItems
			.filter(item =>
				item.name.toLowerCase().includes(searchValue.toLowerCase())
			)
			.map(item => ({
				value: item.name,
				data: item,
				label: (
					<div className='flex flex-col py-1'>
						<span className='text-xs text-gray-600'>
							{item.organization.name}
						</span>
						<span className='text-base font-semibold text-cloud-burst'>
							{item.name} ({item['year-period']})
						</span>
					</div>
				)
			}))

		setSearchOptions(options)
		setSearchInput(searchValue)
	}

	const onSelect = (_: string, option: SearchOptionsType) => {
		navigate(`${path}${option.data.id}`)
	}

	return (
		<AutoComplete
			options={searchOptions}
			onSearch={onSearch}
			onSelect={onSelect}
			defaultValue={searchInput}
			style={{ width: inputWidth }}
		>
			<Input.Search
				size='large'
				placeholder='Search for a dataset or a model'
				onSearch={onSearchBtnClick}
			/>
		</AutoComplete>
	)
}

SearchInput.defaultProps = {
	inputWidth: '100%'
}

export default SearchInput
