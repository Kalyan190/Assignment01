import React, { useState, useEffect } from 'react';
import { useParams, Link,useNavigate} from 'react-router-dom';
import { fetchShowDetails } from '../Fetch Api/FetchData';


const Summary = () => {
      const { id } = useParams();
  const [show, setShow] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    fetchShowDetails(id)
      .then(data => setShow(data))
      .catch(error => console.error('Error fetching show details:', error));
  }, [id]);

  if (!show) {
    return <div className='loading'><h1>Loading...</h1></div>;
  }
  const extractTextFromHTML = htmlString => {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    return doc.body.textContent || "";
  };
  const handleBookTicket = () => {
    // Navigate to BookingForm with the show ID
    history(`/book/${id}`);
  };

  return (
    <div className='summary-container'>
      
      <div className='middle-div'>
      <img src={show.image && show.image.medium} alt={show.name} />
      <div className='summary'>
      <h1>{show.name}</h1>
      <p>{extractTextFromHTML(show.summary)}</p>
      <button onClick={handleBookTicket}>Book Ticket</button>
      <br />
      <div className='back'>
      <Link to="/">Back to Home</Link>
      </div>
      
      </div>
      </div>
    </div>
  );
};

export default Summary;
