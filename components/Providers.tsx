'use client'

import { ReactNode } from "react"
import { SidebarProvider } from "@/contexts/sidebar-context"

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <SidebarProvider>
            {children}
        </SidebarProvider>
    )
}

export default Providers