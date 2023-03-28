import { Skeleton } from 'antd'
import SearchInput from 'components/SearchInput'
import { useFilterContext } from 'context/FilterContext'
import { useNavigate } from 'react-router-dom'
import LandingHeroImg from '../assets/landing-hero-bg.jpg'
import Tag from '../components/Tag'

const LandingPage = () => {
	const navigate = useNavigate()
	const { isFilterOptionsLoading, countries, tags, setFilters } =
		useFilterContext()

	const onSearchBtnClick = (searchValue: string) => {
		setFilters(prevFilters => ({ ...prevFilters, searchValue }))
		navigate(`catalogue`)
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
					<span className='mb-3 text-center text-2xl font-medium tracking-tighter text-white md:text-4xl'>
						Accelerating machine learning adoption in the development sector
					</span>
					<span className='px-10 text-center'>
						Browse our catalogue of models and datasets to gain access to code,
						documentation, and pre-processed datasets that fit to your needs
					</span>
					<SearchInput onSearchBtnClick={onSearchBtnClick} path='catalogue/' />
				</div>
			</div>
			<div className='flex flex-col md:flex-row'>
				<div className='flex w-full flex-col p-10 md:w-1/2'>
					<span className='font-semibold tracking-normal text-cloud-burst'>
						BROWSE BY TAGS
					</span>
					<div className='flex flex-wrap gap-3 py-3'>
						{isFilterOptionsLoading ? (
							<Skeleton.Button active size='small' shape='default' />
						) : (
							tags.map(tag => <Tag key={tag.value}>{tag.value}</Tag>)
						)}
					</div>
				</div>
				<div className='flex w-full flex-col p-10 md:w-1/2'>
					<span className='font-semibold tracking-normal text-cloud-burst'>
						BROWSE BY COUNTRY/REGION
					</span>
					<div className='flex flex-wrap gap-3 py-3 text-cloud-burst'>
						{isFilterOptionsLoading ? (
							<Skeleton.Button active size='small' shape='default' />
						) : (
							countries.map(country => (
								<Tag key={country.value}>{country.label}</Tag>
							))
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default LandingPage
