import { SimpleGrid } from '@mantine/core'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'

export default function index() {
  return (
    <SimpleGrid
      cols={2}
      spacing="lg"
      breakpoints={[
        { maxWidth: 'md', cols: 1, spacing: 'md' },
        { maxWidth: 'sm', cols: 1, spacing: 'sm' },
        { maxWidth: 'xs', cols: 1, spacing: 'sm' }
      ]}
    >
      <LeftSection />
      <RightSection />
    </SimpleGrid>
  )
}
