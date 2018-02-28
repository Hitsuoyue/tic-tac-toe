import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './src/gomoku/style/index.scss';
import Game from './src/gomoku/Game';

class APP extends Component{
    render(){
        return(
            <Game/>
        )
    }
}

ReactDOM.render(<APP/>, document.getElementById('app'));
