import * as React from 'react';
import { RaceType } from '../types';
import { withRouter, RouterProps } from 'react-router';
import * as api from '../api';
import Next5 from '../components/Next5';

interface Next5State {
    races: RaceType[];
    now: number;
}

class Next5Page extends React.Component<RouterProps, Next5State> {
    state = {
        races: [],
        now: new Date().getTime(),
    };

    constructor(props: RouterProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.fetchData();

        setInterval(() => this.handleCountdown(), 1000);
        setInterval(() => this.handleRefetch(), 60000);
    }

    fetchData() {
        api.getAllRaces().then(races => this.setState({ races }));
    }
    
    handleCountdown() {
        this.setState({ now: new Date().getTime() });
    }

    handleRefetch() {
        this.fetchData();
    }

    handleClick(id: string, name: string) {
        this.props.history.push(`/race/${id}/${name}`);
    }

    render() {
        const { races, now } = this.state;
        const top5races = races.filter((race: RaceType) => race.SuspendTime - now > 0)
            .slice(0, 5);
        return (
            <Next5 races={top5races} time={now} onClick={this.handleClick} />
        );
    }
}

export default withRouter(Next5Page);