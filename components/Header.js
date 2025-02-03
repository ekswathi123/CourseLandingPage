import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from "next/link";
export default function Header(){
    return(
        <>
     
     <div className="bg-violet-800 w-full h-12 text-lg flex items-center px-4">
  {/* Left Section */}
  <div className="flex items-center basis-1/2 text-white">
    <Link href="/"><HomeIcon /></Link>
  </div>

  {/* Right Section */}
  <div className="flex flex-row items-center ml-auto space-x-8 text-white">
    <Link href="/Chart" className="text-white">Learners Chart</Link>
    <AccountCircleIcon />
  </div>
</div>
  
        </>
       
    )
}