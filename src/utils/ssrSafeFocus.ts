export function ssrSafeFocus(el?: HTMLElement | null) {
  if (typeof window === 'undefined') return
  el?.focus()
}
