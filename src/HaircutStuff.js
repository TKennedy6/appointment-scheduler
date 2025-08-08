function HaircutStuff(props) {
return (
    <div className='bg-light border p-4 m-2'>
        <h2>{ props.service.type }</h2>
        <p> ${ props.service.price }</p>
    </div>
)
}

export default HaircutStuff