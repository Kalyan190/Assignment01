const BASE_URL = 'https://api.tvmaze.com';

const fetchShows = async () => {
  try {
    const response = await fetch(`${BASE_URL}/search/shows?q=all`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching shows:', error);
    throw error;
  }
};

const fetchShowDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/shows/${id}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching show details:', error);
    throw error;
  }
};

export { fetchShows, fetchShowDetails };
