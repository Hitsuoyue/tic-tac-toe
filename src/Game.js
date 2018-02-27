import React, {Component} from 'react';
import Board from './Board';

class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
            master: 'A',
            squares: Array(9).fill(null)
        }
        this.squaresA = [];
        this.squaresB = [];
    }

    /**
     * 下棋触发
     * @param e
     * @param index
     */
    changeMaster = (e, index) => {
        const { master } = this.state;
        let newSquares = Object.assign([], this.state.squares);
        newSquares[index] = master;
        let newMaster = '';
        if(master === 'A'){
            newMaster = 'B';
            this.squaresA.push(index);
        }else if(master === 'B'){
            newMaster = 'A';
            this.squaresB.push(index);
        }
        this.setState({
            master: newMaster,
            squares: newSquares
        })
        this.calculateWinner();

    };

    /**
     * 判断是否有人连线成功
     */
    calculateWinner = () => {
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

        lines.forEach((arr, index) => {
            if(squares.indexOf(arr[0]) !== -1 && squares.indexOf(arr[1]) !== -1 && squares.indexOf(arr[2]) !== -1){
                alert('chenggong');
            }
        });

        console.log('squaresA', this.squaresB, this.squaresA);
    }

    render(){
        const { master } = this.state;
        return(
            <div className='game'>
                Next Player:{master}
                <Board
                    changeMaster={this.changeMaster}
                    master={this.state.master}
                    squares={this.state.squares}
                    />
            </div>
        )
    }
}

export default Game;
