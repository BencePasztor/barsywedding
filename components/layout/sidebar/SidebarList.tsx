import NavLink from "@/components/layout/NavLink"
import { NAV_LINKS } from "@/lib/constants"

const SidebarList = () => {
    return (
        <ul className="flex flex-col w-full gap-8 mt-8 text-center">
            {NAV_LINKS.map(({ name, url }, index) => (
                <li key={index}>
                    <NavLink className="text-xl" href={url}>{name}</NavLink>
                </li>
            ))}
        </ul>
    )
}

export default SidebarList