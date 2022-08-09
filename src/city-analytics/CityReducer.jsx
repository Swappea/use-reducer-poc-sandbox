import { filterCitiesByAsOfDate, getAnnualReportTypes } from './utils';

import { PA_ACTIONS } from './constants';

import {
  ANNUAL_REPORT_AS_OF_DATE_SELECTOR,
  ANNUAL_REPORT_TYPES,
} from './constants';

export const cityReducer = (state, action) => {
  switch (action.type) {
    case PA_ACTIONS.asOfDateChange: {
      const selAsOfDate = action.payload;
      const filteredCities = filterCitiesByAsOfDate(
        selAsOfDate,
        state.unfilteredCitiesList
      );
      let filteredAnalysisTypes = state.unfilteredAnalysisTypesList.filter(
        (type) => !ANNUAL_REPORT_TYPES.includes(type)
      );
      if (selAsOfDate.includes(ANNUAL_REPORT_AS_OF_DATE_SELECTOR)) {
        filteredAnalysisTypes = getAnnualReportTypes(
          selAsOfDate,
          filteredCities,
          state.unfilteredAnalysisTypesList,
          state.unfilteredCitiesList
        );
      }

      return {
        ...state,
        asOfCitiesList: filteredCities,
        ...(filteredAnalysisTypes.length > 0
          ? { analysisTypesList: filteredAnalysisTypes }
          : {}),
        selAsOfDate,
        selCity:
          filteredCities.find(({ id }) => id === state.selCity)?.id ??
          '',
      };
    }

    case PA_ACTIONS.cityChange: {
      const selCity = action.payload;
      return {
        ...state,
        selCity,
      };
    }

    default: {
      throw new Error('Invalid Action Type');
    }
  }
};

// dispatch util functions

export const asOfDateChangeHandler = ({ dispatch, payload }) => {
  dispatch({ type: PA_ACTIONS.asOfDateChange, payload });
};

export const cityChangeHandler = ({ dispatch, payload }) => {
  dispatch({ type: PA_ACTIONS.cityChange, payload });
};

export const analysisTypeChangeHandler = ({ dispatch, payload }) => {
  dispatch({ type: PA_ACTIONS.analysisTypeChange, payload });
};
