import { Hits, InstantSearch, SearchBox } from 'react-instantsearch-dom';
import Image from 'next/legacy/image';
import CloseIcon from '@mui/icons-material/Close';
// import algoliasearch from 'algoliasearch/lite';
import { algoliasearch } from 'algoliasearch';
import { useRouter } from 'next/router';
import { useState } from 'react';


const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);


const HitComponent = ({ hit }) => {
  const [visible,setVisible]=useState(true);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/courses/${hit.slug}`);
  };
  const handleClose=()=>{
    setVisible(false);
  }


  return (
    <>
     {visible && 
    <div 
     
      className="flex flex-row container mb-4 pt-4 px-4 py-4 bg-violet-400 rounded-lg shadow-md hover:bg-violet-700 transition-colors cursor-pointer transform hover:scale-105"
    >
     <h3  onClick={handleClick} className="text-lg font-semibold text-white">{hit.name}</h3>
      <button onClick={handleClose} className='ml-auto'><CloseIcon/></button>
    </div>
   } 
    </>
  
  );
};

const SearchPage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search and redirect to the first result
  const handleSearch = async () => {
    const index = searchClient[{index:"Course"}];
    // const index='Course';
    const { hits } = await index.search(searchQuery);
    if (hits.length > 0) {
      router.push(`/courses/${hits[0].slug}`);
    } else {
      console.log('No results found for your search.');
    }
  };

  return (
    <div className="w-full p-4">
    <div className="max-w-3xl mx-auto px-6 dark:bg-gray-900 bg-opacity-80 rounded-xl shadow-xl border-4 hover:border-violet-500">
      <InstantSearch indexName="Course" searchClient={searchClient}>
        {/* Flex container for alignment */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <SearchBox
            onChange={(e) => setSearchQuery(e.currentTarget.value)}
            translations={{ placeholder: 'Search for courses...' }}
            //style={{ color: 'black' }}
            className="bg-white dark:bg-gray-900 bg-opacity-80 text-black dark:text-black placeholder-gray-500 dark:placeholder-gray-300"/>
        </div>
  
        {/* Render search results only when there is a query */}
        {searchQuery && (
          <div className="mt-4 space-y-4">
            <Hits hitComponent={HitComponent} />
          </div>
        )}
      </InstantSearch>
    </div>
  </div>
  );
};

export default SearchPage;
