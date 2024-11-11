// Styled
import { Box, Container, Input } from './styled'

interface Props {
  label: string
  checked: boolean
  onChange: (label: string) => void
}

function Checkbox({ label, checked, onChange }: Props) {
  return (
    <Container>
      <Input type={'checkbox'} onChange={() => onChange(label)} />
      <Box $checked={checked} aria-hidden={'true'} />
      {label}
    </Container>
  )
}

export default Checkbox
