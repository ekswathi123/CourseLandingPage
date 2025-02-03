import CourseHeader from "./CourseHeader"
import CalloutRecord from "./CalloutRecord"
import LearningSectionRecord from "./LearningSectionRecord"
import PricingSectionRecord from "./PricingSectionRecord"
import Header from "./Header"
export default function CourseSection({details}){
    if(details.__typename=="CourseHeaderDetailRecord"){
        return(
            <>
            <Header/>
            <CourseHeader details={details}></CourseHeader>
            </>

        )
    }
    else if(details.__typename=="CalloutRecord")
    {
        return(
          <>
          <CalloutRecord details={details}></CalloutRecord>
          </>

        )
    }
    else if(details.__typename=="LearningSectionRecord")
    {
            return(
                <>
                <LearningSectionRecord details={details}></LearningSectionRecord>
                </>

            )
    }
    else if(details.__typename=="PricingSectionRecord")
    {
                return(
                    <>
                    <PricingSectionRecord details={details}></PricingSectionRecord>
                    </>

                )
    }

  
}