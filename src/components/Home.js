import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchShows } from '../Fetch Api/FetchData';

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchShows()
      .then(data => setShows(data))
      .catch(error => console.error('Error fetching shows:', error));
  }, []);
 
  return (
    <div className='container'>
      <ul >
        {shows.map(show => (
          <li key={show.show.id} style={{ listStyle: 'none' }}>
            <Link to={`/show/${show.show.id}`}>
              
              <div className='card'>
              <img src={show.show.image && show.show.image.medium} alt={show.name} />
              <div className='card-info'>
              <h2>{show.show.name}</h2>
              <p>Language : {show.show.language}</p>
              <p>Rating : {show.show.rating.average}</p>
              </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
