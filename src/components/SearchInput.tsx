import { SearchOutlined } from '@ant-design/icons'
import { AutoComplete, Button, Input } from 'antd'
import { useCatalogueItemContext } from 'context/CatalogueItemContext'
import { useFilterContext } from 'context/FilterContext'
import { useSearchContext } from 'context/SearchContext'
import { useNavigate } from 'react-router-dom'
import type { SearchSuggestionsType } from 'types/SearchFilters.type'
import SearchSuggestion from './SearchSuggestion'

interface Props {
	onSearchBtnClick: (
		searchValue: string,
		event?:
			| React.ChangeEvent<HTMLInputElement>
			| React.KeyboardEvent<HTMLInputElement>
			| React.MouseEvent<HTMLElement, MouseEvent> // eslint-disable-line @typescript-eslint/no-unnecessary-type-arguments
	) => void
	path: string
	inputWidth?: string
}

const MAX_OPTIONS = 10

const SearchInput = ({ onSearchBtnClick, path, inputWidth }: Props) => {
	const navigate = useNavigate()
	const { catalogueItems } = useCatalogueItemContext()
	const {
		searchInput,
		setSearchInput,
		searchSuggestions,
		setSearchSuggestions
	} = useSearchContext()
	const { setFilters } = useFilterContext()

	const onSearch = (searchValue: string) => {
		if (searchValue.length < 3) {
			setSearchSuggestions([])
			return
		}

		const options = catalogueItems
			.filter(item =>
				item.name.toLowerCase().includes(searchValue.toLowerCase())
			)
			.slice(0, MAX_OPTIONS)
			.map(item => ({
				value: item.name,
				data: item,
				label: <SearchSuggestion suggestion={item} />
			}))

		setSearchSuggestions(options)
		setSearchInput(searchValue)
	}

	const onSelect = (title: string, option: SearchSuggestionsType) => {
		setFilters(prevFilters => ({ ...prevFilters, searchValue: title }))
		setSearchInput(title)
		setSearchSuggestions([option])
		navigate(`${path}${option.data.id}`)
	}

	return (
		<AutoComplete
			options={searchSuggestions}
			onSearch={onSearch}
			onSelect={onSelect}
			defaultValue={searchInput}
			style={{ width: inputWidth, letterSpacing: '-0.025em' }}
		>
			<Input.Search
				size='large'
				placeholder='Search for a dataset or a model'
				onSearch={onSearchBtnClick}
				allowClear
				enterButton={
					<Button style={{ backgroundColor: 'white' }} size='large'>
						<SearchOutlined color='#24295c' />
					</Button>
				}
			/>
		</AutoComplete>
	)
}

SearchInput.defaultProps = {
	inputWidth: '100%'
}

export default SearchInput
