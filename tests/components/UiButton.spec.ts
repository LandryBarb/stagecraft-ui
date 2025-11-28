import { render } from '@testing-library/vue'
import UiButton from '@/components/atoms/UiButton.vue'

test('renders button', () => {
  const { getByRole } = render(UiButton, { props: { label: 'Click' } })
  expect(getByRole('button')).toBeTruthy()
})
