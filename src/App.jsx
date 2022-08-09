import View from './City-analytics/View';

import data from './assets/data.json';
import analysisTypes from './assets/analysisTypes.json';

const App = () => {
  return (
    <div className='App'>
      <View data={data} analysisTypes={analysisTypes} />
    </div>
  );
};

export default App;
