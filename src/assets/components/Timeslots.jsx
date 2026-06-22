import {useState} from "react"; 

const SLOTS = [
    {id:1, heure: "08:00", disponible:true },
    {id:2, heure: "08:30", disponible:true },
    {id:3, heure: "09:00", disponible:false },
    {id:4, heure: "09:30", disponible:true },
    {id:5, heure: "10:00", disponible:false },
    {id:6, heure: "10:30", disponible:true },
    {id:7, heure: "11:00", disponible:false },
    {id:8, heure: "11:30", disponible:false },
    {id:9, heure: "12:00", disponible:false },
    {id:10, heure: "12:30", disponible:true },
    {id:11, heure: "13:00", disponible:false },
    {id:12, heure: "13:30", disponible:false },
    {id:13, heure: "15:00", disponible:false },
    {id:14, heure: "15:30", disponible:false },
    {id:15, heure: "16:00", disponible:false },
    {id:16, heure: "16:30", disponible:true },
    {id:17, heure: "17:00", disponible:false },
    {id:18, heure: "17:30", disponible:false }
]



function TimeSlots({onSlotSelect,onRetour}){
    const [creneauSelectionne,setCreneauSelectionne] = useState(null)
    return(
        <div >
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 px-4 py-2">
            {SLOTS.map(timeslot =>(
                <div key={timeslot.id} onClick={() => timeslot.disponible == true && setCreneauSelectionne(timeslot.heure)}
                    className={ timeslot.disponible == false ? 
                        "bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed p-2 text-center"
                        :creneauSelectionne === timeslot.heure ? 
                        "bg-blue-600 text-white rounded-lg p-2 text-center" :
                        "border border-blue-300 rounded-lg text-blue-600 hover:bg-blue-50 p-2 text-center"  
                    }transition-all duration-200
                    
                >
                    <span className="mr-2">{timeslot.heure}</span>
                    {/*{timeslot.disponible==false && <button onClick={() => onSlotSelect(timeslot.heure)} disabled></button>
                    || timeslot.disponible==true && <button onClick={() => onSlotSelect(timeslot.heure)} ></button> }*/}

                    
                </div>
            ))}
            </div>
            
            <div className="flex items-center justify-around m-4">
                <button className=" text-white border rounded-lg bg-red-700 border-red-700 px-6 py-2" onClick={onRetour} >Retour</button>
                <button className="text-white rounded-lg  bg-blue-600 px-6 py-2 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed" onClick={() => onSlotSelect(creneauSelectionne)}  disabled={creneauSelectionne === null}>Confirmer</button>
                
            </div>
            
        </div>
    )

}

export default TimeSlots