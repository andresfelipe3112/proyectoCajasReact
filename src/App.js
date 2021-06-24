import Profile from "./Components/Profile.jsx";
import Interests from "./Components/Interests.jsx";
import Learn from "./Components/Learn.jsx";
import Espectations from "./Components/Espectations.jsx";
import Hobbies from "./Components/Hobbies.jsx";
import './App.css';





function App() {

  const dataProfile = {
    name: "Andres Felipe Pinilla Meneses",
    country: "Colombia",
    age: "26",
  }

  const interest = {
    interest1: "Programar",
    interest2: "Pasear en moto sin saber el destino",
    interest3: "Tocar el piano",
  }

  const learning = {
    learn1: "Me gustaría aprender a programar en lenguaje Python",
    learn2: "Me interesaría aprender a hablar inglés",
    learn3: "Me animaría a aprender a bucear"
  }


  const espectation = {
    espectation1: "Poder adquirir el conocimiento necesario para trabajar y desarrollarme profesionalmente en la industria IT",
    espectation2: "Conocer nuevas amistades afines a esta hermosa profesión para interactuar y generar nuevas conexiones para trabajar o emprender"
  }


  const hobbi = {
    hobbi1: "Jugar futbol",
    hobbi2: "Sacar a pasear a mi mascota",
  }



  return (
    <div className="App">


      <Profile name={dataProfile.name} country={dataProfile.country} age={dataProfile.age} />
      <Interests interest1={interest.interest1} interest2={interest.interest2} interest3={interest.interest3} />
      <Learn learn1={learning.learn1} learn2={learning.learn2} learn3={learning.learn3} />
      <Espectations espectation1={espectation.espectation1} espectation2={espectation.espectation2} />
      <Hobbies hobbi1={hobbi.hobbi1} hobbi2={hobbi.hobbi2} />


    </div>
  );
}

export default App;
