import React from 'react';
import { Link } from 'react-router-dom';
import {inject} from 'mobx-react';
@inject('homeStore')
class Home extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.homeStore.title}</p>
                <Link to="/about">go to About</Link>
            </div>
        );
    }
}

export default Home;