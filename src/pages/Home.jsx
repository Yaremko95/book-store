import React, {Component} from 'react';
import JumbotronComponent from "../components/JumbotronComponent";
import LatestRelease from "../components/LatestRelease";
import Footer from "../components/Footer";

class Home extends Component {
    render() {
        return (
                <>
                <JumbotronComponent title={"The Biggest And Best New Publishing Out Now "} />
                <LatestRelease />
                <Footer/>
                </>
        );
    }
}

export default Home;