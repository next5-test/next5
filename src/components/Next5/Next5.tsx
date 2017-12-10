import * as React from 'react';
import './Next5.css';
import { RaceType } from '../../types';
import { formatTimeRemaining, getRaceTypeName } from '../../utils';

interface Next5Props {
  races: RaceType[];
  time: number;
  onClick: Function;
}

const Next5 = (props: Next5Props) => {
  const { races, time, onClick } = props;

  return (
    <div className="next5">
      <div className="header">
        Next 5 Races
        </div>
      <div className="content">
        <table cellSpacing="0" cellPadding="0">
          <tbody>
            {races.map((race: RaceType) => (
              <tr
                key={`${race.EventID}-${race.RaceNum}`}
                onClick={() => onClick(race.EventID, race.Description)}
              >
                <td className="time">{formatTimeRemaining(race.SuspendTime - time)}</td>
                <td className="race">Race {race.RaceNum}</td>
                <td className="description">{race.Description}</td>
                <td className="type">{getRaceTypeName(race.RaceType)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Next5;