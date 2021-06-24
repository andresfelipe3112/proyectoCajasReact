


export default function Profile(props) {

    return (
        <div className="container">
            <h1>Profile</h1>
            <h3>{props.name}</h3>
            <h3>{props.country}</h3>
            <h3>{`${props.age} años`}</h3>
        </div>
    )

}