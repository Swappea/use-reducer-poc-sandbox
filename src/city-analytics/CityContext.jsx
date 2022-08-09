import React from 'react';

import { cityReducer } from './CityReducer';

import { getAsOfDates } from './utils';

const CityStateContext = React.createContext();
CityStateContext.displayName = 'CityStateContext';

const CityDispatchContext = React.createContext();
CityDispatchContext.displayName = 'CityDispatchContext';

export const useCityState = () => {
  const state = React.useContext(CityStateContext);

  if (state === undefined) {
    throw new Error('useCityState must be used within a CityProvider');
  }
  return state;
};

export const useCityDispatch = () => {
  const dispatch = React.useContext(CityDispatchContext);

  if (dispatch === undefined) {
    throw new Error('useCityDispatch must be used within a CityProvider');
  }
  return dispatch;
};

const initState = ({ data, analysisTypes }) => {
  return {
    unfilteredCitiesList: data,
    unfilteredAnalysisTypesList: analysisTypes,
    asOfCitiesList: data,
    asOfDates: getAsOfDates(data),
    analysisTypesList: analysisTypes,
    selAsOfDate: '',
    selCity: '',
    selAnalysisType: '',
  };
};

export const CityProvider = ({ children, data, analysisTypes }) => {
  const [state, dispatch] = React.useReducer(
    cityReducer,
    { data, analysisTypes },
    initState
  );

  return (
    <CityStateContext.Provider value={state}>
      <CityDispatchContext.Provider value={dispatch}>
        {children}
      </CityDispatchContext.Provider>
    </CityStateContext.Provider>
  );
};


