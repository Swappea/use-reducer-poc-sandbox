import { useCityState } from '../CityContext';

import { isRunButtonDisabled } from '../utils';

export const RunButton = () => {
  const paState = useCityState();
  const { selAsOfDate, selCity, selAnalysisType } = paState;

  const { isRunBtnDisabled, runButtonFlyoverText = '' } = isRunButtonDisabled({
    selAsOfDate,
    selCity,
    selAnalysisType,
  });

  return (
    <>
      <button
        title={runButtonFlyoverText}
        disabled={isRunBtnDisabled}
        className='run'
        onClick={() => {
          console.log(state);
        }}>
        Run
      </button>
      <span>{runButtonFlyoverText}</span>
    </>
  );
};
