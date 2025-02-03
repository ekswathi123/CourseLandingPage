import React from "react";
import { gql, GraphQLClient } from "graphql-request";
import CourseSection from "../../components/CourseSection"
const allCoursesQuery = gql`
  query {
    allCourses {
      slug
    }
  }
`;
const courseQuery = gql`
  query($slug: String!) {
    course(filter: { slug: { eq: $slug } }) {
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
`;
export async function getStaticPaths() {
    const endpoint = "https://graphql.datocms.com";
    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
      },
    });
  
    const data = await graphQLClient.request(allCoursesQuery);
  
    const paths = data.allCourses.map((course) => ({
      params: { slug: course.slug },
    }));
  
    return {
      paths,
      fallback: false, // Use 'true' or 'blocking' if needed
    };
  }
  export async function getStaticProps({ params }) {
    const endpoint = "https://graphql.datocms.com";
    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
      },
    });
  
    const data = await graphQLClient.request(courseQuery, { slug: params.slug });
  
    return {
      props: {
        course: data.course,
      },
    };
  }
  export default function CoursePage({ course }) {
    return (
      <div className="coursepage">
        {/* <h1>{course.name}</h1> */}
        {course.details.map(section=><CourseSection details={section} key={section.id}/>)}
      </div>
    );
  }  