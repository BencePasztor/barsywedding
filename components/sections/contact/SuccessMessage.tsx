import { CheckCircle2 } from "lucide-react"

const SuccessMessage = () => {
    return (
        <div className="flex flex-col items-center text-center my-3" role="alert">
            <CheckCircle2 size={40} className="text-green-500 mb-3" />
            <h3 className="text-2xl font-medium mb-1">Sikeres ajánlatkérés!</h3>
            <p>Üzenetedet megkaptam, hamarosan felveszem veled a kapcsolatot.</p>
        </div>
    )
}

export default SuccessMessage