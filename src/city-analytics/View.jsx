import React from 'react';

import {
  CitySelect,
  AnalysisTypesSelect,
  AsOfDateSelect,
  RunButton,
} from './components';

import { CityProvider } from './CityContext';

const View = () => {
  return (
    <div className='view'>
      <h1>City Analytics</h1>

      <div className='container'>
        <AsOfDateSelect />
        <CitySelect />
        <AnalysisTypesSelect />
        <RunButton />
      </div>
    </div>
  );
};

const ViewContainer = ({ data, analysisTypes }) => {
  return (
    <CityProvider data={data} analysisTypes={analysisTypes}>
      <View />
    </CityProvider>
  );
};

export default ViewContainer;
