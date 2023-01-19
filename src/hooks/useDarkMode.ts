import { useEffect, useState } from "react"

export function useDarkMode() {
  let isDark = false
  if (localStorage.getItem('dark-mode') === 'dark') isDark = true;
  const [isEnabled, setIsEnabled] = useState<Boolean>(isDark)
  useEffect(() => {
    isEnabled === true ? localStorage.setItem('dark-mode', 'dark') : localStorage.removeItem('dark-mode')
    localStorage.getItem('dark-mode') === 'dark' ? setIsEnabled(true) : setIsEnabled(false)
    if (window === undefined) return
    const root = window.document.documentElement
    root.classList.remove(isEnabled ? 'light' : 'dark')
    root.classList.add(isEnabled ? 'dark' : 'light')    
  }, [isEnabled])

   return [isEnabled, setIsEnabled] as const
}
