// Styled
import { Box, Input } from './styled'

interface Props {
  label: string
  checked: boolean
  onChange: (label: string) => void
}

function Checkbox({ label, checked, onChange }: Props) {
  return (
    <label>
      <Input type={'checkbox'} onChange={() => onChange(label)} />
      <Box $checked={checked} aria-hidden={'true'} />
      {label}
    </label>
  )
}

export default Checkbox
