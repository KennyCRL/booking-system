const STEPS = [
    {num: 1, titre : "Service"},
    {num: 2, titre : "Date"},
    {num: 3, titre : "Créneau"},
    {num: 4, titre : "Infos"},
    {num: 5, titre : "Confirmation"}
]


function Stepper({etapeActuelle,onNav}){

    
    return(
        <div className="flex items-center justify-center px-4 py-6">
        
            {STEPS.map( step =>(
                <div key={step.num} className="flex items-center">
                    <div className="flex flex-col items-center">
                        <div onClick={() => step.num <= etapeActuelle && onNav(step.num)}
                            className={ step.num < etapeActuelle ?
                            "text-white rounded-full bg-blue-500 hover:bg-blue-800 w-6 h-6 flex flex-col items-center justify-center  sm:w-12 sm:h-12 md:w-12 md:h-12"
                            : step.num === etapeActuelle ?
                            "text-white rounded-full bg-blue-600 hover:bg-blue-800 w-6 h-6 flex flex-col items-center justify-center ring-2 ring-blue-500 ring-offset-2 sm:w-12 sm:h-12 md:w-12 md:h-12"
                            :"text-white rounded-full bg-gray-400 w-6 h-6 flex flex-col items-center justify-center cursor-not-allowed sm:w-12 sm:h-12 md:w-12 md:h-12"
                            

                            }>{step.num}

                            

                        </div>

                            
                            
                        <span className="text-xs mt-1 text-gray-600 hidden">{step.titre}</span>

                    </div>

                    {step.num < STEPS.length && (
                            <div className="w-12 h-1 bg-gray-500"></div>
                    )}

                </div>
            ))}
            
        </div>
    )
}

export default Stepper