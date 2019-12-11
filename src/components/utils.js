const BASE_URL = 'https://newsapi.org/v2';
const END_POINT = 'sources';
const COUNTRY = 'in';
const API_KEY = 'apiKey=5939679864c74aaeb30188bcf27f8039';

function fetchData(endPoint = END_POINT, category = null) {
  let apiCallUrlStructure;
  if (category) {
    apiCallUrlStructure = `${BASE_URL}/${endPoint}?category=${category}&country=${COUNTRY}&${API_KEY}`;
  } else {
    apiCallUrlStructure = `${BASE_URL}/${endPoint}?${API_KEY}`;
  }

  const results = fetch(apiCallUrlStructure)
    .then(res => res.json())
    .then(result => category? result.articles : result.sources)
  return results;
}

export {
  BASE_URL,
  END_POINT,
  API_KEY,
  fetchData,
};
