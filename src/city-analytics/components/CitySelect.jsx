import { useCityDispatch, useCityState } from '../CityContext';
import { cityChangeHandler } from '../CityReducer';

export const CitySelect = () => {
  const { selCity, asOfCitiesList } = useCityState();
  const dispatch = useCityDispatch();

  return (
    <label>
      Cities
      <select
        name='cities'
        value={selCity}
        onChange={({ target }) =>
          cityChangeHandler({ dispatch, payload: target.value })
        }>
        <option value=''>Select Cities</option>
        {asOfCitiesList.map(({ id, name, asOfDate }) => (
          <option key={id} value={id}>
            {name} - {asOfDate}
          </option>
        ))}
      </select>
    </label>
  );
};
