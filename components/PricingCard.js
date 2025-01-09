export default function PricingCard({details}){
    if(details.featured)
    {
        return(
            <div className="w-full bg-white border-yellow-400 mb-2 hover:border-4 max-w-sm rounded lg p-6">
               <h3 className="text-purple-500 text-xl mb-4 uppercase">{details.title}</h3>
               <p className="text-purple-500 text-6xl font-bold mb-10">
                {details.isFree?<span>FREE</span>:<span>Rs.{details.price}</span>}
                {details.priceSuffix && <span className="text-lg m-1">{details.priceSuffix}</span>}
               </p>
               <ul>
                {details.description.split('*').map((bullet,index)=>(
                    <li key={index} className="text-black-500 my-2 text-sm">
                        {bullet}
                    </li>
                ))}
               </ul>
               <button className="mx-auto w-full block bg-yellow-400 px-4 py-2 rounded-md text-white mt-6 mb-4">{details.buttonText}</button>
                {details.finePrint && <small className="text-black-200 block text-center text-xm">{details.finePrint}</small>}
            </div>
        )
    }
    else{
        return(
            <div className="w-full bg-purple-500 max-w-sm rounded lg p-6 hover:border-purple-400 hover:border-4">
               <h3 className="text-white text-xl mb-4 uppercase">{details.title}</h3>
               <p className="text-white text-6xl font-bold mb-10">
                {details.isFree?<span>FREE</span>:<span>Rs.{details.price}</span>}
                {details.priceSuffix && <span className="text-lg m-1">{details.priceSuffix}</span>}
               </p>
               <ul>
                {details.description.split('*').map((bullet,index)=>(
                    <li key={index} className="text-purple-100 my-2 text-sm">
                        {bullet}
                    </li>
                ))}
               </ul>
               <button className="mx-auto w-full block bg-purple-400 px-4 py-2 rounded-md text-white mt-6 mb-4">{details.buttonText}</button>
                {details.finePrint && <small className="text-purple-200 block text-center text-xm">{details.finePrint}</small>}
            </div>
        )
    }
    
}