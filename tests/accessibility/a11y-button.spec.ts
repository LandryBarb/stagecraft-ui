import { render } from '@testing-library/vue'
import { axe, toHaveNoViolations } from 'vitest-axe'
import UiButton from '@/components/atoms/UiButton.vue'

expect.extend(toHaveNoViolations)

test('button is accessible', async () => {
  const { container } = render(UiButton)
  expect(await axe(container)).toHaveNoViolations()
})
