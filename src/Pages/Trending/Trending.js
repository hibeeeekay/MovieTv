import axios from 'axios';
import { useEffect,useState } from 'react';
import SingleContent from '../../components/singleContent/singleContent';
import "./Trending.css";
import CustomPagination from "../../components/Pagination/CustomPagination";
const Trending = () => {
    
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    
    const fetchTrending = async () => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=01b1d74bd8c0ad0d07282a7e3439cb07&page=${page}`
        )
        
        //console.log(data.results);

        setContent(data.results);
    };

    useEffect(() => {
       fetchTrending();
    }, [])
    return (
        <div>
            <span className="pageTitle">Trending</span>
            <div className="trending">
                {content && content.map((c) => <SingleContent key={c.id} 
              id={c.id} 
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}/>)}
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    )
}

export default Trending
