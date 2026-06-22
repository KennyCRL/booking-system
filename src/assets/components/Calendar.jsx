import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";

const MONTHS = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
const weekDays = ["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"]


function Calendar({onDateSelect,onRetour}){
    
    const [month, setMonth] = useState(new Date().getMonth())
    const [jourSelectionne,setjourSelectionne] = useState({jour:null,mois:null})
    const [year, setYear] = useState(new Date().getFullYear())
    const dayscount = new Date(year, month + 1, 0).getDate()
    const DAYS = Array.from({length: dayscount}, (_,i) => i + 1)

    const firstDay = new Date(year, month, 1).getDay()
    
    const joursdelays = () => {
        let delays
        if (firstDay != 0){
            delays = Array.from({length: firstDay - 1}, () => null)
        }

        else{
            delays = Array.from({length: 7 - 1}, () => null)
        }

        return delays
    }

    const delaysArray = joursdelays()

    console.log(firstDay)

    const delayDAYS = delaysArray.concat(DAYS)
    
    const PreviousMonth = () => {
        if (month > 0) {
            setMonth(month - 1)
            
        }
        else{
            setMonth(11)
            setYear(year - 1)
            
        }

        
    }


    const NextMonth = () => {
        if (month< 11) {
            setMonth(month + 1)
        } 
        else {
            setMonth(0)
            setYear(year + 1)
        }
        
       
    }

    
    console.log(delayDAYS)
    

    




    return(
        <div className="px-0 md:px-4 sm:px-4">
            
            {/*<div> Année : {year}</div>
            <div> 1er jour : {firstDay} </div>
            <div> Nombre de jours : {dayscount} </div>
            <div> Nombre de jours de délai : {delaysArray.length} </div>*/}
            <div className="flex items-center justify-center gap-4 py-2 mb-4">
                <button onClick={PreviousMonth}><ArrowLeft /></button>
                <span>  {MONTHS[month]} </span>
                <button onClick={NextMonth}><ArrowRight /></button>
            </div>
            
          

            <div className="grid grid-cols-7  ">
                {weekDays.map(d =>(
                    <span key={d} className="flex items-center justify-center sm:p-4">{d}</span>
                ))}

                
                {delayDAYS.map((day,index) =>(
                <span key={index} className="flex items-center justify-center "><button onClick={() => setjourSelectionne({jour:day,mois:MONTHS[month]})}
                className={jourSelectionne.jour === day && jourSelectionne.jour !=null ? "bg-blue-600 text-white rounded-full w-9 h-9 m-2 sm:w-12 sm:h-12 sm:mb-4" : "hover:bg-gray-400 rounded-full w-9 h-9 m-2 hover:text-blue-600 transition-all cursor-pointer sm:w-12 sm:h-12 sm:mb-4"}
                 >{day}</button></span>
                ))}
                  
            </div>

            

            <div>
                {/*<span>Valeur jourSelectionnne : {jourSelectionne.jour}</span>*/}
            </div>


            <div className="flex items-center justify-around mb-10">
                <button className=" text-white rounded-lg bg-red-700 px-6 py-2" onClick={onRetour} >Retour</button>
                <button className=" text-white rounded-lg bg-blue-600 px-6 py-2 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed" onClick={() => onDateSelect({jour:jourSelectionne.jour,mois:jourSelectionne.mois})} disabled={jourSelectionne.jour===null}>Confirmer</button>
                
            </div>
            
        </div>
    )
}

export default Calendar