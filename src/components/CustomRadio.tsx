import { Radio } from 'antd'
import type { ToggleOption } from '../constants/index'
import { TOGGLE_OPTIONS } from '../constants/index'

interface CustomRadioProps {
	updateParentOptions: (value: ToggleOption) => void
}

const CustomRadio = ({ updateParentOptions }: CustomRadioProps) => {
	const onToggle = (value: ToggleOption) => updateParentOptions(value)

	return (
		<Radio.Group defaultValue={TOGGLE_OPTIONS.All} buttonStyle='solid'>
			<Radio.Button
				value={TOGGLE_OPTIONS.All}
				style={{ borderRadius: 0 }}
				onClick={() => onToggle(TOGGLE_OPTIONS.All)}
			>
				All
			</Radio.Button>
			<Radio.Button
				value={TOGGLE_OPTIONS.model}
				onClick={() => onToggle(TOGGLE_OPTIONS.model)}
			>
				Models
			</Radio.Button>
			<Radio.Button
				value={TOGGLE_OPTIONS.dataset}
				onClick={() => onToggle(TOGGLE_OPTIONS.dataset)}
				style={{ borderRadius: 0 }}
			>
				Datasets
			</Radio.Button>
		</Radio.Group>
	)
}
export default CustomRadio
