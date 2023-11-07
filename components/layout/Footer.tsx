import { getCopyrightYear } from "@/utils/date-utils"

const Footer = () => {
  return (
    <footer className="p-4 flex items-center justify-center bg-secondary text-cbg text-xs">
      Copyright © {getCopyrightYear()} | Barsy Wedding
    </footer>
  )
}

export default Footer