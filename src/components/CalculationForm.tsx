/* eslint-disable react/prop-types */
import React, {
  ChangeEventHandler,
  HTMLAttributes,
  MouseEventHandler,
} from 'react';

type CalculationFormProps = HTMLAttributes<HTMLDivElement> & {
  height?: number;
  weight?: number;
  onChangeHeight: ChangeEventHandler<HTMLInputElement>;
  onChangeWeight: ChangeEventHandler<HTMLInputElement>;
  calculateImc: MouseEventHandler<HTMLButtonElement>;
};

const CalculationForm: React.FC<CalculationFormProps> = ({
  height,
  weight,
  onChangeHeight,
  onChangeWeight,
  calculateImc,
}) => (
  <div className="container">
    <div className="card">
      <div className="card-content">
        <h2 className="center-align">Calculadora de IMC</h2>
        <div className="row">
          <div className="col s12">
            Altura (cm):
            <div className="input-field">
              <input
                type="number"
                name="height"
                id="altura"
                value={height}
                onChange={onChangeHeight}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            Peso (Kg):
            <div className="input-field">
              <input
                type="number"
                name="weight"
                id="peso"
                value={weight}
                onChange={onChangeWeight}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="card-action">
        <div className="row">
          <div className="input-field col s12 center-align">
            <button className="btn-large" type="button" onClick={calculateImc}>
              Calcular
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CalculationForm;
