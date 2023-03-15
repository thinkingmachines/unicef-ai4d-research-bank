import LandingHeroImg from '../assets/landing-hero-bg.jpg'
import Tag from '../components/Tag'

const LandingPage = () => (
	<div className='h-[calc(100vh_-_3rem)] bg-white'>
		<div className='relative flex h-96 flex-col items-center justify-center px-10 text-white'>
			<img
				src={LandingHeroImg}
				alt='BannerImage'
				className='absolute z-0 h-full w-full object-cover'
			/>
			<div className='absolute z-10 h-full w-full bg-cloud-burst opacity-60' />
			<div className='z-20 flex flex-col items-center justify-center'>
				<span className='mb-3 text-center text-4xl font-medium tracking-tighter text-white'>
					Accelerating machine learning adoption in the development sector
				</span>
				<span className='px-10 text-center'>
					Browse our catalogue of models and datasets to gain access to code,
					documentation, and pre-processed datasets that fit to your needs
				</span>
				<input
					className='mt-5 w-3/5 rounded-md px-3 py-2 tracking-tight text-cloud-burst'
					placeholder='Search for a dataset or a model'
				/>
			</div>
		</div>
		<div className='flex flex-row'>
			<div className='flex w-1/2 flex-col p-10'>
				<span className='font-semibold tracking-normal text-cloud-burst'>
					BROWSE BY TAGS
				</span>
				<div className='flex gap-3 py-3'>
					<Tag>poverty-mapping</Tag>
					<Tag>air-quality</Tag>
				</div>
			</div>
			<div className='flex w-1/2 flex-col p-10'>
				<span className='font-semibold tracking-normal text-cloud-burst'>
					BROWSE BY COUNTRY/REGION
				</span>
				<div className='flex gap-3 py-3'>
					<Tag>philippines</Tag>
					<Tag>timor-leste</Tag>
				</div>
			</div>
		</div>
	</div>
)

export default LandingPage
