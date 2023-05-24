import { Skeleton } from 'antd'
import FeaturedItemCard from 'components/FeaturedItemCard'
import SearchInput from 'components/SearchInput'
import { useCatalogueItemContext } from 'context/CatalogueItemContext'
import { useFilterContext } from 'context/FilterContext'
import { useSearchContext } from 'context/SearchContext'
import { useNavigate } from 'react-router-dom'
import DefaultFeaturedImg from '../assets/default-featured-image.jpg'
import LandingHeroImg from '../assets/landing-hero-bg.jpg'
import Tag from '../components/Tag'

const defaultFilters = {
	countryFilter: [],
	organizationFilter: [],
	tagsFilter: [],
	// eslint-disable-next-line unicorn/no-null
	yearFilter: null,
	searchValue: ''
}

const LandingPage = () => {
	const navigate = useNavigate()
	const { setSearchInput } = useSearchContext()
	const {
		isFilterOptionsLoading,
		countries,
		tags,
		setFilters,
		setIsFiltersLoading
	} = useFilterContext()
	const { isLoading, featuredItems } = useCatalogueItemContext()

	const onSearchBtnClick = (
		searchValue: string,
		event?:
			| React.ChangeEvent<HTMLInputElement>
			| React.KeyboardEvent<HTMLInputElement>
			| React.MouseEvent<HTMLElement, MouseEvent> // eslint-disable-line @typescript-eslint/no-unnecessary-type-arguments
	) => {
		setFilters({ ...defaultFilters, searchValue })

		if (event?.type === 'click' && event.currentTarget.localName === 'input') {
			setSearchInput('')
			return
		}

		navigate('catalogue')
	}

	const onCountryClick = (countryValue: string) => {
		setIsFiltersLoading(true)
		setFilters({
			...defaultFilters,
			countryFilter: [countryValue]
		})
		navigate('catalogue')
	}

	const onTagClick = (tagValue: string) => {
		setIsFiltersLoading(true)
		setSearchInput('')
		setFilters({ ...defaultFilters, tagsFilter: [tagValue] })
		navigate('catalogue')
	}

	return (
		<div className='min-h-[calc(100vh_-_3rem)] bg-white'>
			<div className='relative flex h-96 flex-col items-center justify-center px-3 text-white md:px-10'>
				<img
					src={LandingHeroImg}
					alt='BannerImage'
					className='absolute z-0 h-full w-full object-cover'
				/>
				<div className='absolute z-10 h-full w-full bg-cloud-burst opacity-60' />
				<div className='z-20 flex flex-col items-center justify-center'>
					<span
						className='mb-3 text-center text-2xl font-medium tracking-tighter text-white md:text-4xl'
						data-cy='hero-mainText'
					>
						Accelerating machine learning adoption in the development sector
					</span>
					<span className='px-10 text-center' data-cy='hero-subtext'>
						Browse our catalogue of models and datasets to gain access to code,
						documentation, and pre-processed datasets that fit to your needs
					</span>
					<div className='my-5 flex w-2/3 flex-row' data-cy='hero-search'>
						<SearchInput
							onSearchBtnClick={onSearchBtnClick}
							path='catalogue/'
						/>
					</div>
				</div>
			</div>
			<div className='flex flex-col p-10' data-cy='featured-datasets'>
				<span className='font-semibold tracking-normal text-cloud-burst'>
					FEATURED DATASETS
				</span>
				<div className='mt-3 grid auto-rows-min grid-cols-1 gap-10 md:grid-cols-3'>
					{isLoading ? (
						<Skeleton.Button active size='large' block />
					) : (
						featuredItems.map(featuredItem => (
							<FeaturedItemCard
								key={featuredItem.id}
								item={featuredItem}
								image={DefaultFeaturedImg}
							/>
						))
					)}
				</div>
			</div>
			<div className='flex flex-col md:flex-row'>
				<div
					className='flex w-full flex-col p-10 md:w-1/2'
					data-cy='tag-browse'
				>
					<span className='font-semibold tracking-normal text-cloud-burst'>
						BROWSE BY TAGS
					</span>
					<div className='flex flex-wrap gap-3 py-3'>
						{isFilterOptionsLoading ? (
							<Skeleton.Button active size='small' shape='default' />
						) : (
							tags.map(tag => (
								<Tag
									key={tag.value}
									onFilterClick={onTagClick}
									value={tag.value}
								>
									{tag.value}
								</Tag>
							))
						)}
					</div>
				</div>
				<div className='flex w-full flex-col p-10 md:w-1/2'>
					<span
						className='font-semibold tracking-normal text-cloud-burst'
						data-cy='region-browse'
					>
						BROWSE BY COUNTRY/REGION
					</span>
					<div className='flex flex-wrap gap-3 py-3 text-cloud-burst'>
						{isFilterOptionsLoading ? (
							<Skeleton.Button active size='small' shape='default' />
						) : (
							countries.map(country => (
								<Tag
									key={country.value}
									onFilterClick={() => onCountryClick(country.value)}
									value={country.value}
								>
									{country.label}
								</Tag>
							))
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default LandingPage
