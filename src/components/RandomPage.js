export default function RandomPage({ servicesList }) {

    const randomService = servicesList[Math.floor(Math.random() * servicesList.length)]
    return (
        <div>
            <h5>You should get a...</h5>
        <h2 className="display-1">{ randomService.type }</h2>
        </div>
    )
}