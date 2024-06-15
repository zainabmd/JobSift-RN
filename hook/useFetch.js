import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch=(endpoint,query)=>{
    const [data,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);
    const options = {
      method: 'GET',
      headers: {
        // 'x-rapidapi-key':'f0b2961d68msh0dcc73c265f91cdp168c79jsn1ad4fa4bc778',
        'x-rapidapi-key': '6f79fc8cb1msha2f83d08f04cacfp16a885jsn357caff580be',
        'x-rapidapi-host': 'jsearch.p.rapidapi.com'
      },
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      params: {...query}
    };

    const fetchData=async()=>{
      setIsLoading(true);
      try{
        // const response = await axios.request("./../assets/data.json");
        const response=await axios.request(options);
        setData(response.data.data);
        setIsLoading(false);
      }
      catch(error){
        console.log(error)
        setError(error);
      }
      finally{
        setIsLoading(false);
      }
    }
    useEffect(()=>{
      fetchData();
    },[]);

    const refetch=()=>{
      setIsLoading(true);
      fetchData();
    }
    return {data, isLoading, error, refetch};
}
export default useFetch;
// params:{query: 'Python developer in Texas, USA',
//         page: '1',
//         num_pages: '1',
//         date_posted: 'all'}
