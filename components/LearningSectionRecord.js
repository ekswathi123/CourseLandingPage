export default function LearningSectionRecord({details}){
    return(
      <div className="max-w-8xl mx-auto py-20 px-8">
        <h2 className="text-4xl font-bold mb-8"> {details.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{details.learningPoints.map(point=>(
        <div className="flex flex-col text-gray-600 bg-gray-50 rounded-lg" key={point.id}>
             
            
            <div className="py-3 px-3 flex items-center justify-between border-2 border-gray-500 rounded-t-lg text-gray-700 font-bold">
            <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
            </div>
            <div className="flex-grow flex items-center justify-center py-6 px-8 rounded-b-lg border-2 border-gray-500 border-t-0 text-center">
                {point.title}
             </div>   
            </div>
      ))} </div>

      <div className="mx-auto px-8 xl:px-0 py-24 text-8xl text-gray-500 md:flex md:justify-center md:space-x-20 space-y-10 md:space-y-0 max-w-7xl">
      <div>
        <span className="font-extrabold text-black flex items-center">
            <span>{details.numberOfLessons}</span>
            <span className="text-purple-500 text-2xl">+</span></span>
            <span className="block mt-2 text-xl">Lessons</span>
    
      </div>
      <div>
        <span className="font-extrabold text-black flex items-center">
            <span>{details.totalHoursOfContent}</span>
            <span className="text-purple-500 text-2xl">+</span></span>
            <span className="block mt-2 text-xl text-center">Hours of On Demand Content</span>
        
      </div>
      </div>
   
      </div>
    )
}