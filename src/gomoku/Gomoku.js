import React, {Component} from 'react';
import Board from './Board';

class Gomoku extends Component{
    constructor(props){
        super(props);
        this.state = {
            master: 'A',
            squares: Array(100).fill(undefined),
            winner: '',
            history:[{
                master: 'A',
                squares: []
            }],
            back: false
        };
        this.squaresA = [];
        this.squaresB = [];
    }

    /**
     * 下棋触发
     * @param e
     * @param index
     */
    changeMaster = (e, index) => {
        const { master,squares } = this.state;
        console.log(master, winner, squares);
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
        newHistory = {
            master: master,
            squares: squares
        };

        let winner = this.calculateWinner();

        this.setState({
            master: newMaster,
            squares: newSquares,
            winner: winner,
            history: newHistory,
            back: false
        });
    };

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
        const lines = [];
        let arr1 = [
            [0, 1, 2, 3, 4],
            [1, 2, 3, 4, 5],
            [2, 3, 4, 5, 6],
            [3, 4, 5, 6, 7],
            [4, 5, 6, 7, 8],
            [5, 6, 7, 8, 9]
        ];
        lines.push(...arr1);
        let arr1Copy = Object.assign([], arr1);
        arr1Copy.forEach((arr,index)=>{
            for(let i=0;i<9;i++){
                let itemNew = arr.map(val=>val+(i+1)*10);
                lines.push(itemNew);
            }
        });

        let arr2 = [
            [0, 10, 20, 30, 40],
            [10, 20, 30, 40, 50],
            [20, 30, 40, 50, 60],
            [30, 40, 50, 60, 70],
            [40, 50, 60, 70, 80],
            [50, 60, 70, 80, 90]
        ];
        lines.push(...arr1);
        let arr2Copy = Object.assign([], arr2);
        arr2Copy.forEach((arr,index)=>{
            for(let i=0;i<9;i++){
                let itemNew = arr.map(val=>val+i+1);
                lines.push(itemNew);
            }
        });

        let arr4 = [
            [0, 11, 22, 33, 44],
            [1, 12, 23, 34, 45],
            [2, 13, 24, 35, 46],
            [3, 14, 25, 36, 47],
            [4, 15, 26, 37, 48],
            [5, 16, 27, 38, 49]
        ];
        lines.push(...arr4);
        let arr4Copy = Object.assign([], arr4);
        arr4Copy.forEach((arr,index)=>{
            for(let i=0;i<5;i++){
                let itemNew = arr.map(val=>val+(i+1)*10)
                lines.push(itemNew);
            }
        });

        let arr3 = [
            [4, 13, 22, 31, 40],
            [5, 14, 23, 32, 41],
            [6, 15, 24, 33, 42],
            [7, 16, 25, 34, 43],
            [8, 17, 26, 35, 44],
            [9, 18, 27, 36, 45]
        ];
        lines.push(...arr3);
        let arr3Copy = Object.assign([], arr3);
        arr3Copy.forEach(arr=>{
            for(let i=0;i<5;i++){
                let itemNew = arr.map(val=>val+(i+1)*10)
                lines.push(itemNew);
            }
        });


        let squares = (master === 'A') ? this.squaresA : this.squaresB;

        lines.forEach(arr => {
            if(squares.indexOf(arr[0]) !== -1 && squares.indexOf(arr[1]) !== -1 && squares.indexOf(arr[2]) !== -1 && squares.indexOf(arr[3]) !== -1 && squares.indexOf(arr[4]) !== -1){
                winner = master;
            }
        });
        return winner;
    }

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

    /**
     * 后退一步
     */
    backStep = () => {
        if(!this.state.back){
            const { master, squares } = this.state.history;
            let masterSquares = [];
            if(master === 'A'){
                masterSquares = this.squaresA;
            }else if(master === 'B'){
                masterSquares = this.squaresB;
            }
            masterSquares.splice(this.squaresB.length-1, 1);
            this.setState({
                master: master,
                squares: squares,
                winner: '',
                back: true,
                history:{
                    master: '',
                    squares: []
                }
            })
        }
    }

    render(){
        const { master, squares, winner } = this.state;
        let status = winner ? `Winner is: ${winner}` : `Next Player: ${master}` ;

        return(
            <div className='game-5'>
                <div className='title-5'>
                    {status}
                    <button
                        className='again-5'
                        onClick={this.refreshGame}
                    />
                    <button
                        className='back-5'
                        onClick={this.backStep}
                    />
                </div>

                <Board
                    changeMaster={this.changeMaster}
                    master={master}
                    squares={squares}
                    winner={winner}
                    />
            </div>
        )
    }
}

export default Gomoku;
