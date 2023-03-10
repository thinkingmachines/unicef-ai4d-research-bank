const LandingPage = () => (
	<div className='h-[calc(100vh_-_3rem)] bg-white'>
		<div className='flex h-96 flex-col items-center justify-center bg-cloud-burst px-10 text-white'>
			<span className='mb-3 text-center text-3xl font-bold text-white'>
				Accelerating machine learning adoption in the development sector
			</span>
			<span className='px-10 text-center'>
				Browse our catalogue of models and datasets to gain access to code,
				documentation, and pre-processed datasets that fit to your needs
			</span>
			<input
				className='mt-8 w-3/5 rounded-lg p-3 text-cloud-burst'
				placeholder='Search for a dataset, model, or tag'
			/>
		</div>
		<div className='p-10'>
			<span className='font-bold text-cloud-burst'>Browse by tags</span>
			<div>
				<button
					type='button'
					className='btn btn-cloud-burst rounded bg-cloud-burst p-1 text-white'
				>
					poverty-mapping
				</button>
				<button
					type='button'
					className='btn btn-cloud-burst m-2 rounded bg-cloud-burst p-1 text-white'
				>
					air-quality
				</button>
			</div>
		</div>
	</div>
)

export default LandingPage
