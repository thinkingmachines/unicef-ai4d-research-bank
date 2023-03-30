import {
	CalendarOutlined,
	EnvironmentOutlined,
	SearchOutlined
} from '@ant-design/icons'
import { AutoComplete, Button, Input } from 'antd'
import { useCatalogueItemContext } from 'context/CatalogueItemContext'
import { useFilterContext } from 'context/FilterContext'
import { useSearchContext } from 'context/SearchContext'
import { useNavigate } from 'react-router-dom'
import type { SearchOptionsType } from 'types/SearchFilters.type'
import { formatString } from 'utils/String.util'

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
	const { searchInput, setSearchInput, searchOptions, setSearchOptions } =
		useSearchContext()
	const { setFilters } = useFilterContext()

	const onSearch = (searchValue: string) => {
		if (searchValue.length < 3) {
			setSearchOptions([])
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
				label: (
					<div className='flex flex-col py-1'>
						<span className='text-xs text-gray-600'>
							{item.organization.name}
						</span>
						<span className='text-base font-semibold text-cloud-burst'>
							{item.name} ({item['year-period']})
						</span>
						<div className='flex flex-row gap-10'>
							{item['country-region'] ? (
								<div className='flex flex-row items-center'>
									<EnvironmentOutlined
										style={{
											color: '#4B5563',
											marginRight: '4px',
											fontSize: '14px'
										}}
									/>
									<span className='w-1/2 text-xs text-gray-600'>
										Year/Period: {formatString(item['country-region'])}
									</span>
								</div>
							) : undefined}
							{item['year-period'] ? (
								<div>
									<CalendarOutlined
										style={{
											color: '#4B5563',
											marginRight: '4px',
											fontSize: '14px'
										}}
									/>
									<span className='w-1/2 text-xs text-gray-600'>
										Year/Period: {item['year-period']}
									</span>
								</div>
							) : undefined}
						</div>
					</div>
				)
			}))

		setSearchOptions(options)
		setSearchInput(searchValue)
	}

	const onSelect = (title: string, option: SearchOptionsType) => {
		setFilters(prevFilters => ({ ...prevFilters, searchValue: title }))
		setSearchInput(title)
		setSearchOptions([option])
		navigate(`${path}${option.data.id}`)
	}

	return (
		<AutoComplete
			options={searchOptions}
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
