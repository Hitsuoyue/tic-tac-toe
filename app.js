import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Game from './src/Game';

class APP extends Component{
    render(){
        return(
            <Game/>
        )
    }
}

ReactDOM.render(<APP/>, document.getElementById('app'));
