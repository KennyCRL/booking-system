import { useState } from "react";



function BookingForm({onSubmit,onRetour}){

    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [mail, setMail] = useState("")
    const [motif, setMotif] = useState("")

    return(
        <div>
            <form className="max-w-sm space-y-4 mx-auto p-6 sm:p-0 sm:max-w-lg sm:space-y-6">

                <div className="flex flex-col">
                    <label htmlFor="name" className="py-2">Nom :</label>
                    <input className="border rounded-lg border-gray-400 focus:outline-none p-2 bg-amber-50 focus:border-blue-500" type="text" value={nom} onChange={(e) => setNom(e.target.value)} ></input>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="surname" className="py-2">Prenom :</label>
                    <input className="border rounded-lg border-gray-400 focus:outline-none p-2 bg-amber-50 focus:border-blue-500" type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} ></input>
                </div>
                
                <div className="flex flex-col">
                    <label htmlFor="mail" className="py-2">Mail :</label>
                    <input className="border rounded-lg border-gray-400 focus:outline-none p-2 bg-amber-50 focus:border-blue-500"  type="email" value={mail} onChange={(e) => setMail(e.target.value)} ></input>
                </div>
                
                <div className="flex flex-col">
                    <label htmlFor="motif" className="py-2">Motif :</label>
                    <textarea className="border rounded-lg border-gray-400 focus:outline-none p-2 bg-amber-50 focus:border-blue-500 resize-none" value={motif} onChange={(e) => setMotif(e.target.value)}></textarea>
                </div>

                <div className="flex items-center justify-around ">
                    <button className=" text-white border rounded-lg bg-red-700 border-red-700 px-6 py-2" onClick={onRetour} >Retour</button>
                    <button type="button" className="text-white rounded-lg bg-blue-600 px-6 py-2 hover:bg-blue-800  disabled:bg-gray-300 disabled:cursor-not-allowed"  disabled={nom=="" || prenom == "" || mail =="" || motif==""} onClick={() => onSubmit({nom, prenom, mail, motif})}>
                        Confirmer
                    </button>
                    
                </div>
                
            </form>
        </div>
    )
}

export default BookingForm