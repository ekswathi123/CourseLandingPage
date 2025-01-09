
import { gql,GraphQLClient } from "graphql-request";

import CourseSection from "../components/CourseSection"
import React from "react";
export default function Home({course}) {
  console.log("Course",course.details);
  //const courseDetails=[course.details];
  //console.log(courseDetails);
  return ( 
    <div>
     {course.details.map(section=><CourseSection details={section} key={section.id}/>)}
    </div>
    );
}
const query= gql`
       query{
        course {
          id
          name
          slug
          details{
           ... on CourseHeaderDetailRecord {
              __typename
              bigTitle
              smallTitle
              buttonText
              description
              id
            }
        ... on CalloutRecord{
        __typename
        smallTitle
        bigTitle
        description
        image{
          id
          url 
          width
          height
        }
      }
      ... on LearningSectionRecord{
        __typename
        title
        learningPoints{
          ... on LearningPointRecord{
            id
            title
            de
          }
        }
        numberOfLessons
        totalHoursOfContent
      }
      ... on PricingSectionRecord{
        __typename
        title
        pricingCard{
          ... on PricingCardRecord{
            __typename
            id
            title
            price
            isFree
            buttonText
            finePrint
            priceSuffix
            description
            featured
          }
        }
      }
          }
        }
      }
`      
export async function getStaticProps(){
    const endpoint="https://graphql.datocms.com";
    const graphQLClient=new GraphQLClient(endpoint,{
      headers:{
        "content-type":"application/json",
        authorization:"Bearer "+process.env.DATOCMS_API_KEY,
      }
    });
    const course=await graphQLClient.request(query);
    console.log(course);
    return ({
      props:course
    })
}
