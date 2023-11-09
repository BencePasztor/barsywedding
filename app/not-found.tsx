import Link from 'next/link'
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4 text-primary-500">404</h1>
                <p className="text-lg font-medium mb-4">A keresett oldal nem található.</p>
                <Link className="text-lg font-medium inline-flex mx-auto items-center justify-center gap-1 transition-colors hover:text-primary-600 group" href="/">
                    <ArrowLeft className="transition-transform group-hover:-translate-x-1" />
                    <span>Vissza a főoldalra</span>
                </Link>
            </div>
        </div>
    )
}