import { ANNUAL_REPORT_TYPES } from './constants';

export const getAsOfDates = (asOfCities) => {
  const asOfDatesMap = new Map();

  asOfCities.forEach(({ asOfDate }) => {
    if (!asOfDatesMap.has(asOfDate)) {
      asOfDatesMap.set(asOfDate, asOfDate);
    }
  });

  return Array.from(asOfDatesMap, ([key, value]) => ({ key, value }));
};

export const filterCitiesByAsOfDate = (selAsOfDate, asOfCities) => {
  return asOfCities.filter(({ asOfDate }) => selAsOfDate === asOfDate);
};

export const getAnnualAsOfDatesForYear = (year) => {
  return ['Q1', 'Q2', 'Q3', 'Q4'].map((quarter) => `${quarter} ${year}`);
};

export const getAnnualReportTypes = (
  asOfDate,
  filteredAsOfCities,
  analysisTypesList,
  unfilteredCitiesList
) => {
  const [, year] = asOfDate.split(' ');
  const asOfDates = getAnnualAsOfDatesForYear(year);

  const citiesFilteredByGivenAsOfDates = [];
  for (const filteredAsOfCity of filteredAsOfCities) {
    const cityListByName = unfilteredCitiesList.filter(
      (unfilteredAsOfCity) =>
        unfilteredAsOfCity.name === filteredAsOfCity.name &&
        asOfDates.includes(unfilteredAsOfCity.asOfDate)
    );
    citiesFilteredByGivenAsOfDates.push(cityListByName);
  }

  const showAnnualReports = citiesFilteredByGivenAsOfDates.some(
    (arr) => arr.length === 4
  );

  if (showAnnualReports) {
    return analysisTypesList;
  }
  return analysisTypesList.filter(
    (type) => !ANNUAL_REPORT_TYPES.includes(type)
  );
};

export const isRunButtonDisabled = ({
  selAsOfDate,
  selCity,
  selAnalysisType,
}) => {
  let isDisabled = false;
  const message = [];
  if (selAsOfDate === '') {
    isDisabled = true;
    message.push('As-Of-Date');
  }
  if (selCity === '') {
    isDisabled = true;
    message.push('City');
  }
  if (selAnalysisType === '') {
    isDisabled = true;
    message.push('Analysis Type');
  }

  // messages forming
  const lf = new Intl.ListFormat('en');
  const flyoverText = `${lf.format(
    message
  )} are required to do City Analysis`;
  console.log(flyoverText);

  return {
    isRunBtnDisabled: isDisabled,
    runButtonFlyoverText: flyoverText,
  };
};
