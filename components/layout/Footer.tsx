import { getCopyrightYear } from "@/utils/date-utils"

const Footer = () => {
  return (
    <footer className="flex items-center justify-center p-4 text-xs bg-secondary">
      Copyright © {getCopyrightYear()} | Barsy Wedding
    </footer>
  )
}

export default Footer