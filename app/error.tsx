'use client'

import { RefreshCw } from "lucide-react"
import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
    useEffect(() => { console.error(error) }, [error])

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">Hoppá!</h1>
                <p className="text-lg font-medium mb-4"> Valamilyen <span className="text-red-600 font-bold">hiba</span> történt.</p>
                <button onClick={reset} className="text-lg font-bold flex items-center mx-auto gap-1 transition-colors hover:text-primary-600 group">
                    <RefreshCw className="group-hover:animate-spin" />
                    <span>Próbáld újra</span>
                </button>
            </div>
        </div>
    )
}