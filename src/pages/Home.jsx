import React, {Component} from 'react';
import JumbotronComponent from "../components/JumbotronComponent";
import LatestRelease from "../components/LatestRelease";


class Home extends Component {
    render() {
        return (
                <>
                <JumbotronComponent title={"The Biggest And Best New Publishing Out Now "} />
                <LatestRelease />
                </>
        );
    }
}

export default Home;