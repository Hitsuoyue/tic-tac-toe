import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Gomoku from './src/gomoku/Gomoku';
import TicTacToe from './src/tic-tac-toe/TicTacToe';
import './index.scss';

class APP extends Component{
    constructor(props){
        super(props);
        this.state = {
            type: 'tictactoe'
        }
    }

    /**
     * 游戏类型改变
     * @returns {*}
     */
    onTypeChange = (e) => {
        console.log(e.target);
        const { type } = this.state;
        let newType = '';
        switch (type){
            case 'tictactoe':
                newType = 'gomoku';
                break;
            case 'gomoku':
                newType = 'tictactoe';
                break;
            default: break;
        }
        this.setState({
            type: newType
        })
    }

    render(){
        const { type } = this.state;
        const Game = (type === 'tictactoe') ? TicTacToe : Gomoku;
        return(
            <div>
                <form onChange={this.onTypeChange} className='type-change'>
                    游戏类型切换：
                    <input type="radio" name='type' value='tictactoe' defaultChecked/><label>井字棋</label>
                    <input type="radio" name='type' value='gomoku'/><label>五子棋</label>
                </form>
                <Game/>
            </div>

        )
    }
}

ReactDOM.render(<APP/>, document.getElementById('app'));
