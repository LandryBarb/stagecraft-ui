export function useScrollLock(active: boolean) {
  if (active) document.body.style.overflow = 'hidden'
  else document.body.style.overflow = ''
}
