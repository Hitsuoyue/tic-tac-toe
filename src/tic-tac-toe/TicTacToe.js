import React, {Component} from 'react';
import Board from './Board';
import Steps from './Steps';
import Header from './Header';

class TicTacToe extends Component{
    constructor(props){
        super(props);
        this.state = {
            master: 'A',
            squares: Array(9).fill(null),
            winner: '',
            history:[{
                master: 'A',
                squares: []
            }]
        };
        this.squaresA = [];
        this.squaresB = [];
    }

    /**
     * 下棋触发
     */
    changeMaster = (e, index) => {
        const { master } = this.state;
        let newSquares = Object.assign([], this.state.squares);
        let newHistory = Object.assign([], this.state.history);
        newSquares[index] = master;
        let newMaster = '';
        if(master === 'A'){
            newMaster = 'B';
            this.squaresA.push(index);
        }else if(master === 'B'){
            newMaster = 'A';
            this.squaresB.push(index);
        }
        newHistory.push({
            master: newMaster,
            squares: newSquares
        });

        let winner = this.calculateWinner();

        this.setState({
            master: newMaster,
            squares: newSquares,
            winner: winner,
            history: newHistory
        });
    };

    /**
     * 点击步骤按钮后，跳转到对应的棋盘格状态
     */
    onStepClick = (e, data) => {
        const { master, squares } = data;
        this.setState({
            squares: squares,
            master: master
        });
    }

    /**
     * 判断是否有人连线成功
     */
    calculateWinner = () => {
        let winner = '';
        const { master } = this.state;
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        let squares = (master === 'A') ? this.squaresA : this.squaresB;

        lines.forEach(arr => {
            if(squares.indexOf(arr[0]) !== -1 && squares.indexOf(arr[1]) !== -1 && squares.indexOf(arr[2]) !== -1){
                winner = master;
            }
        });
        return winner;
    }

    /**
     * 重新开始一把游戏
     */
    refreshGame = () => {
        this.squaresA = [];
        this.squaresB = [];
        this.setState({
            master: 'A',
            squares: Array(9).fill(null),
            winner: '',
            history:[{
                master: 'A',
                squares: []
            }]
        })
    }

    render(){
        const { master, squares, winner, history } = this.state;
        return(
            <div className='game'>
                <Header
                    winner={winner}
                    master={master}
                    refreshGame={this.refreshGame}
                />
                <Board
                    changeMaster={this.changeMaster}
                    master={master}
                    squares={squares}
                    winner={winner}
                />
                <Steps
                    history={history}
                    onStepClick={this.onStepClick}
                />
            </div>
        )
    }
}

export default TicTacToe;
