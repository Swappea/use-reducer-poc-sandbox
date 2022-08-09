import { useCityDispatch, useCityState } from '../CityContext';

import { asOfDateChangeHandler } from '../CityReducer';

export const AsOfDateSelect = () => {
  const { selAsOfDate, asOfDates } = useCityState();
  const dispatch = useCityDispatch();

  return (
    <label>
      As Of Date
      <select
        name='as-of-date'
        value={selAsOfDate}
        onChange={({ target }) =>
          asOfDateChangeHandler({ dispatch, payload: target.value })
        }>
        <option value=''>Select As-of-date</option>
        {asOfDates.map(({ key, value }) => (
          <option key={key} value={value}>
            {value}
          </option>
        ))}
      </select>
    </label>
  );
};
