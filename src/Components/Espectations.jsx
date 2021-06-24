
import "./Expectations.css"



export default function Espectations(props) {

    return (
        <div className="container">
            <h1>Espectations</h1>
            <p>{props.espectation1}</p>
            <p>{props.espectation2}</p>
        </div>
    )

}