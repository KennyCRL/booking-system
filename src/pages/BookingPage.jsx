import ServiceSelector from "../assets/components/ServiceSelector"
import Calendar from "../assets/components/Calendar";
import { useState } from "react"
import { Check } from 'lucide-react';
import TimeSlots from "../assets/components/Timeslots";
import BookingForm from "../assets/components/BookingForm";
import Stepper from "../assets/components/Stepper";


function BookingPage(){
    const [serviceSelectionne, setServiceSelectionne] = useState(null);
    const [dateSelectionne,setDateSelectionne] = useState(null)
    const [timeSlotSelectionne, setTimeSlotSelectionne ] =useState(null)
    const [reservation, setReservation] = useState(null)
    const handleSubmit = (donnees) => {
        setReservation(donnees)
        etapeSuivante()
        //alert("Reservation confirmée") 
    }
    
    const [etape, setEtape] = useState(1)
    const etapeSuivante = () => setEtape(etape + 1)
    const etapePrecedente = () => {etape > 1 && setEtape(etape - 1)}

    const GestionServiceSelect = (service) => {
        setServiceSelectionne(service)
        etapeSuivante()
    }

    const GestionDateSelect = (date_selection) => {
        setDateSelectionne(date_selection)
        etapeSuivante()
        
    }

    const GestionTimeSlots = (timeslot_select) => {
        setTimeSlotSelectionne(timeslot_select)
        etapeSuivante()
    }

    const OnNavig = (number) => {
        setEtape(number)
    } 


    return (
        <div className="max-w-xl sm:max-w-5xl mx-auto w-full ">
            <h1 className="text-2xl font-bold flex items-center justify-center sm:text-3xl">Réservation en ligne</h1>

            <Stepper etapeActuelle={etape} onNav={OnNavig}></Stepper>
            <div>Valeur étape : {etape}</div>
            {etape ===1 && <ServiceSelector onSelect={GestionServiceSelect} />}
            {etape ===2 && <Calendar onDateSelect={GestionDateSelect} onRetour={etapePrecedente}/>}
            {etape ===3 && <TimeSlots onSlotSelect={GestionTimeSlots} onRetour={etapePrecedente}/>}
            {etape ===4 && <BookingForm onSubmit={handleSubmit} onRetour={etapePrecedente}/>}
            {etape >= 5 && 
                <div className="p-2">
                    <div className="flex flex-col items-center text-white rounded-xl bg-blue-950 p-10 mx-auto space-y-3 max-w-sm sm:max-w-2xl">

                        <p><Check color="#00ff6e" strokeWidth={3} className="rounded-full w-10 h-10 bg-amber-50 m-3 px-1" /></p>
                        <h3 className="text-xl font-bold flex text-center">Récapitulatif de la réservation</h3>
                        <p><span className="font-bold">Service :</span> {serviceSelectionne.nom}</p>
                        <p> <span className="font-bold">Date sélectionnée :</span> {dateSelectionne.jour} {dateSelectionne.mois}</p>
                        <p> <span className="font-bold">Créneau choisi :</span> {timeSlotSelectionne}</p>
                        <p><span className="font-bold">Nom :</span>  {reservation.nom} {reservation.prenom}</p>
                        <p> <span className="font-bold">Email :</span>  {reservation.mail}</p>
                        <p> <span className="font-bold">Motif :</span>  {reservation.motif}</p>
                    </div>  
                </div> 
            }

              

        </div>
    )
}

export default BookingPage

