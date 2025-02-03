import Header from "./Header"
import HomeIcon from '@mui/icons-material/Home';
export default function CourseHeader({details}){
    const sentences=details.description.split(".");
    sentences.splice(sentences.length,1);
    return(
        <div>
            {/* <div> <Header/></div> */}
       
        <div className="bg-gray-200 py-20 px-10 flex flex-col items-center">
            <h1 className="text-2xl text-center text-gray-600 font-bold">
                {details.smallTitle}
                <span className="block text-gray-900 text-6xl font-bold mb-10">
                    {details.bigTitle}
                </span>
                
            </h1>
            {sentences.map((sentences,index)=><p key={index} className="max-w-auto text-center text-gray-600 text-lg">{sentences}</p>)}
            <a href="#pricing-section" className="rounded-md align-center bg-violet-300 mt-8 py-3 px-4 text-gray hover:bg-violet-400">{details.buttonText}</a>
        </div>
        </div>
        
    )
}