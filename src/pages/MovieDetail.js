import React,{useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Award from '../components/Award';
import { MovieState } from '../movieState';
import { motion } from 'framer-motion';
import { pageAnimation } from './animation';
const MovieDetail = () => {
    const {pathname} = useLocation();
    
    const url = pathname;
    console.log(pathname);
    const [movies,setMovies] = useState(MovieState);
    const [movie,setMovie] = useState(null);


    useEffect(()=>{

        const currentMovie = movies.filter((getMovie) => getMovie.url === url);
        setMovie(currentMovie[0]);
       
    },[url,movies]);

    
  return (
      <>
      {movie && (
                <Details variants={pageAnimation} initial="hidden" animate="show" exit="exit" >
                <Headline>
                    <h2>{movie.title}</h2>
                    <img src={movie.mainImg} alt="movie" />
                </Headline>
                <Awards>
                        {movie.awards.map((award)=> (
                                <Award title={award.title} description={award.description} key={award.title}/>
                        ))}
                </Awards>
                <ImageDisplay>
                    <img src={movie.secondaryImg} alt="secondary" />
                </ImageDisplay>
            </Details>
      )}
        
    </>
  );
};

const Details = styled(motion.div)`
        color: white;
       

                `;
const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
         position: absolute;
         top: 10%;
         left: 50%;
         transform: translate(-50%,-10% );
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }

`;
const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin:5rem 10rem;
    align-items: center;
    justify-content: space-around;
`;

const ImageDisplay = styled.div`

    min-height: 50vh;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }


`;






export default MovieDetail;
