/* eslint-disable react/prop-types */
import React, { HTMLAttributes, useEffect, useState } from 'react';

type IMCProps = HTMLAttributes<HTMLDivElement> & {
  imcResult?: number;
};

interface IMCData {
  status: string;
  imcRange: string;
  weightRange: string;
  selected: boolean;
  imcMin?: number;
  imcMax?: number;
}

const imcsData: IMCData[] = [
  {
    status: 'Magreza',
    imcRange: '< 18.5',
    weightRange: '< 55.4 Kg',
    selected: false,
    imcMax: 18.5,
  },
  {
    status: 'Normal',
    imcRange: '18.5 a 24.9',
    weightRange: '55.4 a 74.5 Kg',
    selected: false,
    imcMin: 18.5,
    imcMax: 24.9,
  },
  {
    status: 'Sobrepeso',
    imcRange: '24.9 a 30',
    weightRange: '74.5 a 89.8 Kg',
    selected: false,
    imcMin: 24.9,
    imcMax: 30,
  },
  {
    status: 'Obesidade',
    imcRange: '> 30',
    weightRange: '> 89.8 Kg',
    selected: false,
    imcMin: 30,
  },
];

const IMCTable: React.FC<IMCProps> = ({ imcResult }) => {
  const [imcs, setImcs] = useState<IMCData[]>([]);

  useEffect(() => {
    if (imcResult) {
      const newImcsData = imcsData.map(imc => {
        let selected = false;

        if (imc.imcMin && imc.imcMax) {
          if (imcResult >= imc.imcMin && imcResult <= imc.imcMax) {
            selected = true;
          }
        } else if (imc.imcMin) {
          if (imcResult >= imc.imcMin) {
            selected = true;
          }
        } else if (imc.imcMax) {
          if (imcResult <= imc.imcMax) {
            selected = true;
          }
        }

        return {
          ...imc,
          selected,
        };
      });

      setImcs(newImcsData);
    } else {
      setImcs(imcsData);
    }
  }, [imcResult]);

  return (
    <div className="container">
      {imcResult && <h3>O seu IMC é {imcResult.toFixed(2)}</h3>}
      <table className="responsive-table centered">
        <thead>
          <tr>
            <th>Status</th>
            <th>IMC</th>
            <th>Peso</th>
          </tr>
        </thead>

        <tbody>
          {imcs.map(imc => (
            <tr className={imc.selected ? '#ffff00 yellow accent-2' : ''}>
              <td>{imc.status}</td>
              <td>{imc.imcRange}</td>
              <td>{imc.weightRange}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IMCTable;
