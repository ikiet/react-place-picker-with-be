import Places from './Places.jsx';
import { useFetch } from '../hooks/useFetch.js';
import { getPlaces } from '../http.js';
import Error from './Error.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const {
    fetchedData: availablePlaces,
    isFetching,
    error,
  } = useFetch(getPlaces, []);
  if (error) {
    return (<Error title="An error occurred!" message={error.message} />);
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      loading={isFetching}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
