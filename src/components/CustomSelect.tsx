import { Select } from 'antd'
import type { SelectOption } from '../constants/index'
import { SELECT_OPTIONS } from '../constants/index'
import '../css/CustomSelect.css'

interface CustomSelectProps {
	updateParentOptions: (value: SelectOption) => void
}

const CustomSelect = ({ updateParentOptions }: CustomSelectProps) => {
	const onChange = (value: string) => {
		const selectOptionValue = value as SelectOption
		updateParentOptions(selectOptionValue)
	}

	return (
		<div>
			<Select
				defaultValue='None'
				style={{ width: 150, borderRadius: 0 }}
				onChange={value => onChange(value)}
				options={[
					{
						value: SELECT_OPTIONS.none,
						label: 'None'
					},
					{
						value: SELECT_OPTIONS.yearAsc,
						label: 'Year Ascending'
					},
					{
						value: SELECT_OPTIONS.yearDesc,
						label: 'Year Descending'
					},
					{
						value: SELECT_OPTIONS.nameAsc,
						label: 'Name Ascending'
					},
					{
						value: SELECT_OPTIONS.nameDesc,
						label: 'Name Descending'
					}
				]}
			/>
		</div>
	)
}
export default CustomSelect
