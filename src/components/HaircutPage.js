import { useParams } from "react-router-dom"


export default function HaircutPage({ servicesList }) {
    let  { haircutId } = useParams()
    haircutId = parseInt(haircutId)

    const haircut = servicesList.find(h => h.id === haircutId)

    if (!haircut) {
        return <h2>Service Not Found...</h2>
    };

    return (
        <div>
            <h3>{haircut.type}</h3>
            <p>{haircut.price}</p>
            <p>{haircut.premium}</p>
        </div>
    )
}