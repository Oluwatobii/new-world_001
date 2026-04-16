import { useContext } from 'react'
import { ActiveSectionContext } from '@/contexts/ActiveSectionContext'

export function useActiveSection() {
  return useContext(ActiveSectionContext)
}

export default useActiveSection
