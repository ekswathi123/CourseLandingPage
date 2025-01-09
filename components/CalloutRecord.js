import Image from "next/image"
export default function CalloutRecord({details}){
  return(
    <div className="bg-gray-800 py-20 px-10">
       <div className="flex flex-col max-w-6xl md:flex-row md:items-center mx-auto">
          <div className="md:w-[60%] grow p-4">
            <h2 className="text-4xl text-gray-200 font-bold">
                {details.smallTitle}
                <span className="block text-yellow-200 text-6xl font-bold mb-10">{details.bigTitle}</span>
            </h2>
            <p className="text-gray-200 text-xl max-w-lg">{details.description}</p>
          </div>
          <div className="w-full px-20">
             <Image width={900} height={1000} src={details.image.url} alt={details.bigTitle}/>
          </div>
       </div>
    </div>
  )
}