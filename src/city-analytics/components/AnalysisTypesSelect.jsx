import { useCityDispatch, useCityState } from '../CityContext';

import { analysisTypeChangeHandler } from '../CityReducer';

export const AnalysisTypesSelect = () => {
  const { selAnalysisType, analysisTypesList } = useCityState();
  const dispatch = useCityDispatch();

  return (
    <label>
      Analysis Types
      <select
        name='analysis-types'
        value={selAnalysisType}
        onChange={({ target }) =>
          analysisTypeChangeHandler({ dispatch, payload: target.value })
        }>
        <option value=''>Select Analysis Types</option>
        {analysisTypesList.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </label>
  );
};
