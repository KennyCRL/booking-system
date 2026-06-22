import { useState } from "react"

const SERVICES = [
    {id:"consult", nom:"Consultation générale", duree:"30 min", prix:"Gratuit"},
    {id:"followup", nom:"Suivi médical", duree:"20 min", prix:"Sur devis"},
    {id:"specialist", nom:"Consultation spécialisée", duree:"45 min", prix:"Sur demande"}
]

function ServiceCard({nom, duree, prix, onSelectServ}){
  return(
    <div className="border rounded-lg border-gray-400 p-4 hover:border-blue-500 
      hover:shadow-md hover:bg-blue-50 hover:-translate-y-1 duration-200 active:bg-blue-400 text-gray-700 transition-all cursor-pointer font-semibold " onClick={() => onSelectServ(nom,duree,prix)}>
      
      <h3 className="text-lg text-gray-800">{nom}</h3>
      <p className="text-sm text-gray-600">Durée : {duree}</p>
      <p className="text-sm text-gray-600">Prix : {prix}</p>

      {/*
      <p> <button onClick={() => onSelect(nom)} 
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Sélectionner
      </button></p>*/}
      
    </div>
  )
}


function ServiceSelector({onSelect}){
    
  const [servSelectionne,setServSelectionne] = useState(null)
  
  const Handleclick = (nom,duree,prix) => {
    setServSelectionne({nom:nom,duree:duree,prix:prix})
  }

  console.log(servSelectionne)


  return(
      <div className="px-8 space-y-6 w-full">
          <h2>Choisissez un service</h2>
          {SERVICES.map(service => (
              <ServiceCard 
                  key={service.id}
                  nom={service.nom}
                  duree={service.duree}
                  prix={service.prix}
                  onSelectServ={Handleclick}
              />
          ))}
        
        <div className="flex ">
          <button className="text-white rounded-lg px-6 py-2 max-w-lg mx-auto bg-blue-700 mt-4 disabled:bg-gray-400 disabled:cursor-not-allowed" disabled={!servSelectionne}  onClick={() => onSelect(servSelectionne)}>Confirmer</button>
        </div>
        
        <div className="rounded-xl bg-black"></div>
      </div>
  )
}

export default ServiceSelector 