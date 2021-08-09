import React , {useState , useEffect} from 'react';
import axios from 'axios';

const Row = ({title , fetchURL}) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchURL);
            console.log(request);
            return request;
        }
        fetchData();
    }, [])

    return (
        <div>
            {/* title */}
            <h1>{title}</h1>
            {/* container -> posters */}
        </div>
    )
}

export default Row
