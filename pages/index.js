
import { gql,GraphQLClient } from "graphql-request";
import Head from "next/head";
import Link from "next/link";
import CourseSection from "../components/CourseSection"
import React from "react";
import Image from "next/image";
import Header from "../components/Header"
import SearchIcon from '@mui/icons-material/Search';
import { algoliasearch } from "algoliasearch";
import { InstantSearch, Hits, SearchBox,RefinementList } from "react-instantsearch";
import { useEffect, useState } from "react";
const searchClient=algoliasearch('0HV8WCHOO8','ed8c917fdd900d10ce6c816d53240405');
import Search from "./../components/Search"
import DarkModeIcon from '@mui/icons-material/DarkMode';

// export default function Home({course}) {
//   console.log("Course",course.details);
//   //const courseDetails=[course.details];
//   //console.log(courseDetails);
//   return ( 
//     <div>
//      {course.details.map(section=><CourseSection details={section} key={section.id}/>)}
//     </div>
//     );
// }


const HOMEPAGE_QUERY= gql`
   query{
    allCourses {
    id
    name
    slug 
       details{
      ... on CourseHeaderDetailRecord{
        smallTitle
        bigTitle
      }
      ... on CalloutRecord{
        description
         image{
         id
         url
         height
         width
       }
      }
    ... on KeypointRecord{
        description
      }
   }    
   }
  }`

export async function getStaticProps(context) {
  const endpoint = "https://graphql.datocms.com";

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
    },
  });

  const data = await graphQLClient.request(HOMEPAGE_QUERY);
  console.log(data.allCourses);

  return {
    props: {
      courses: data.allCourses,
    },
  };
}



export default function Home(props) {
  const { courses } = props;
  const Hit=({ hit }) => {
    console.log("Hit:",hit.name);
    return (
      <article>
        {/* <img src={hit.image} alt={hit.name} /> */}
        {/* <p>{hit.categories[0]}</p> */}
        <h1>{hit.name}</h1>
        {/* <p>${hit.price}</p> */}
      </article>
    );
  }
  // const posts = data.allCourses;
  // const [searchQuery, setSearchQuery] = useState("");
  //console.log(props);
  return (
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition duration-300">

      <Head>
        <title>Course Website</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3" />
      </Head>

      <div>
        <Header/>
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/49114193.js"></script>
        <button
  onClick={() => document.documentElement.classList.toggle("dark")}
  className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md"
>
<DarkModeIcon/>
</button>

      </div>
      <div>
        <Search/>
      </div>
      <div className="grid grid-cols-3 px-4 py-10 gap-4">
        {courses.map((p) => (
          <CoursePagePreview id={p.id} courses={p} />
        ))}
      </div>
    </div>
  );
}

const CoursePagePreview = (props) => {
  const { id, courses } = props;
  const details=courses.details[1];
  console.log(courses);
  return (
    
    <div className="flex flex-row">
    <div className="grid grid-col-3 gap-6 py-8">
    <div className="h-[450px] w-full dark:bg-gray-700 bg-white dark:text-gray-100 shadow-xl hover:shadow-indigo-500/75 cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out flex flex-col justify-between rounded-lg p-4">
        <div className="flex items-center justify-center">
        <Image 
        src={details.image.url} 
        width={300} 
        height={450} 
        alt={details.bigTitle} 
        className="w-[300px] h-[200px] mt-2 rounded-lg shadow-md  gap-px"
      />
        </div>
      
       {/* <div className="fixed inset-0 bg-black bg-opacity-50 z-50"></div> */}
       <div className="hover:grid-rows-6">
         <h6 className="font-bold text-l pl-4 text-center pt-4">{courses.details[0].smallTitle} {courses.details[0].bigTitle}</h6>
         <ul>
        {courses.details[4].description.split('*').map((bullet,index)=>(
                    <li key={index} className="text-black-100 my-2 text-l">
                        {bullet}
                    </li>
                ))}
        </ul>
      </div>
      <div className="flex items-center justify-center">
     <Link 
        href={`/courses/${courses.slug}`} 
        className="flex items-center justify-center text-lg font-semibold 
             text-blue-400 hover:text-blue-700 mb-12"
      >
        Get Started Now
        <span className="ml-2 text-lg  text-blue-500 hover:text-blue-700">&#8594;</span>
      </Link>

     </div>
      </div>
     
    
    </div>
  </div>
  
   
 
  );
};
const FlourishChart = () => {
  const embedCode = `
    <div class="flourish-embed flourish-chart" data-src="visualisation/21261224"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/21261224/thumbnail" width="100%" alt="chart visualization" /></noscript></div>
  `;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: embedCode }}
      style={{ width: "100%", height: "500px" }}
    ></div>
  );
};


