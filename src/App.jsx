import { useState } from "react"
import BookingPage from "./pages/BookingPage"

function ServiceCard({nom, duree, prix, ftn}){

  return(
    <div>
      <h2>{nom}</h2>
      <p>Durée : {duree}</p>
      <p>Prix : {prix}</p>
      <p> <button onClick={() => ftn(nom)}>
        Sélectionner
      </button></p>
    </div>
  )
}

function App() {
  /*const [count, setCount] = useState(0)*/
  /*const [SelectServ, setSelectServ] = useState("Aucun")*/


  return(
    <div className="">
      
      {/*
        <h1>Système de réservation</h1>
        <p>Bienvenue sur la plateforme de réservation en ligne.</p>
      */}

      {/*
      <h1>Système de réservation</h1>
      <p>Vous avez cliqué {count} </p>
      <button onClick={() => setCount(count + 1)}>
        Cliquer
      </button>
      <button onClick={() => setCount(0)}>
        Réinitialiser
      </button>
      */}

      {/*
      <h1>Système de réservation</h1>
      <ServiceCard nom="Consultation" duree="30 min" prix="Gratuit" ftn={setSelectServ} />
      <ServiceCard nom="Suivi médical" duree="20 min" prix="Sur devis" ftn={setSelectServ}/>
      <ServiceCard nom="Réunion Artistique" duree="40 min" prix="500€" ftn={setSelectServ}/>
      <p>Service sélectionné :{SelectServ}</p>
      */}


      <BookingPage/>
    
      </div>
  )
}

export default App