import * as React from 'react';
import './RaceDetails.css';
import { CompetitorType } from '../../types';
import { Link } from 'react-router-dom';

interface RaceDetailsProps {
  competitors: CompetitorType[];
  name: string;
}

const RaceDetails = ({ competitors, name }: RaceDetailsProps) => (
  <div className="race">
    <Link to="/">Back</Link>
    <div className="header">
      {name}
    </div>
    <div className="content">
      <table cellSpacing="0" cellPadding="0">
        <tbody>
          {competitors.map((competitor: CompetitorType) => (
            <tr key={competitor.Name} className="horses" >
              <td className="position">{competitor.PositionNumber}</td>
              <td>{competitor.Name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default RaceDetails;