import * as React from 'react';
import { CompetitorType } from '../types';
import { RouteComponentProps } from 'react-router';
import { getCompetitorsOnRace } from '../api';
import RaceDetails from '../components/RaceDetails';

// tslint:disable-next-line:no-any
class RaceDetailsPage extends React.Component<RouteComponentProps<any>, {}> {
    state = {
        competitors: [],
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const id = this.props.match.params.id;
        getCompetitorsOnRace(id)
            .then((competitors: CompetitorType[]) => this.setState({ competitors }));
    }

    render() {
        return (
            <RaceDetails competitors={this.state.competitors} name={this.props.match.params.name} />
        );
    }
}

export default RaceDetailsPage;