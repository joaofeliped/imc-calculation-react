import React, { useCallback, useState } from 'react';
import CalculationForm from './components/CalculationForm';
import IMCTable from './components/IMCTable';

const App: React.FC = () => {
  const [height, setHeight] = useState<number | undefined>();
  const [weight, setWeight] = useState<number | undefined>();
  const [imcResult, setImcResult] = useState<number | undefined>();

  const handleImcCalculation = useCallback(() => {
    if (height && weight) {
      const heightMeter = height / 100;
      const imc = weight / (heightMeter * heightMeter);

      setImcResult(imc);
    }
  }, [weight, height]);

  const handleWeightChange = useCallback(event => {
    setWeight(event.target.value);
  }, []);

  const handleHeightChange = useCallback(event => {
    setHeight(event.target.value);
  }, []);

  return (
    <>
      <CalculationForm
        height={height}
        weight={weight}
        onChangeWeight={handleWeightChange}
        onChangeHeight={handleHeightChange}
        calculateImc={handleImcCalculation}
      />
      <IMCTable imcResult={imcResult} />
    </>
  );
};

export default App;
