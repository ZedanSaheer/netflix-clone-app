import React , {useState , useEffect} from 'react';
import axios from './axios';
import './Row.css'

const baseURL = 'https://image.tmdb.org/t/p/original/'

function Row({title , fetchURL , isLargerRow}){

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL])

    console.table(movies);

    return (
        <div className="row">
            {/* title */}
            <h1>{title}</h1>
            {/* container -> posters */}
            <div className="row-posters">
                {movies.map(movie => (
                    <img key={movie.id} className={`row-poster ${isLargerRow && "row-larger"}`} src={`${baseURL}${isLargerRow? movie.poster_path : movie.backdrop_path }`} alt={movie.name}/>
                ))}
            </div>
        </div>
    )
}

export default Row
