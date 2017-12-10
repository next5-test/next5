import { RaceType, CompetitorType } from '../types/index';

export function getAllRaces() {
  return fetch('http://www.ladbrokes.com.au/api/feed/racingList')
    .then(request => request.json())
    .then(data => {
      const races = Object.keys(data)
        .map(key => data[key])
        .map(race => Object.assign(race, {
          SuspendTime: new Date(race.SuspendDateTime).getTime()
        }))
        .sort((a: RaceType, b: RaceType) =>
          a.SuspendTime - b.SuspendTime);
      return Promise.resolve(races);
    });
}

export function getCompetitorsOnRace(eventId: string) {
  return fetch('http://www.ladbrokes.com.au/api/feed/eventRunners?event_id=' + eventId)
    .then(request => request.json())
    .then(data => {
      const competitorsObject = data[eventId].competitors;
      const competitors: CompetitorType[] = Object.keys(competitorsObject)
        .map(key => ({
          Name: competitorsObject[key].Name,
          PositionNumber: competitorsObject[key].Saddle
        }));
      return Promise.resolve(competitors);
    });
}