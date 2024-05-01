import labour from "../assets/copd_labour.jpg"


const Home= ()=>{
    return (
        <div className="bg-transparent flex flex-col h-5/8">
            <div className="overview flex justify-between items-center ">
                <div className="flex w-7/12 px-2">
                    <img src={labour} alt="lungs" className="size-full rounded-3xl"/>
                </div>
                <div className="desc bg-gray-800 flex  w-5/12 text-3xl p-10 italic">
                    &quot;COPD Detector can help seniors who have COPD, monitor their symptoms to assess their need for increased care&quot;
                </div>
            </div>    
        </div>
    )
}

export default Home;