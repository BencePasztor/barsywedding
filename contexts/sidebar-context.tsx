import { useState, createContext, useContext, ReactNode } from "react"

type SidebarContextType = {
    isOpen: boolean,
    openSidebar: () => void,
    closeSidebar: () => void
}

// Context
const SidebarContext = createContext<SidebarContextType | null>(null)

// Hook
export const useSidebar = () => {
    const currentSidebarContext = useContext(SidebarContext)

    if (!currentSidebarContext) {
        throw new Error(
            "useSidebar has to be used within <SidebarContext.Provider>"
        );
    }

    return currentSidebarContext
}

// Provider
export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false)
    const openSidebar = () => { setIsOpen(true) }
    const closeSidebar = () => { setIsOpen(false) }

    return (
        <SidebarContext.Provider value={{ isOpen, openSidebar, closeSidebar }}>
            {children}
        </SidebarContext.Provider>
    )
}