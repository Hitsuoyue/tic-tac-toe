import React, {Component} from 'react';
import Square from './Square';

class Board extends Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }

    /**
     * 渲染面板上的 square
     * @returns {Array}
     */
    renderSquare = (i) =>{
        const { squares } = this.props;
        let squaresBtn = [];
        for(let i=0;i<9;i++){
            squaresBtn.push(
                <Square
                    changeMaster={this.props.changeMaster}
                    key={i}
                    index={i}
                    value={squares[i]}
                    squaresChange={this.props.squaresChange}
                    master={this.props.master}
                    winner={this.props.winner}
                />
            )
        }
        return squaresBtn;
    };

    render(){
        return(
            <div className='board'>
                {this.renderSquare()}
            </div>
        )
    }
}

export default Board;
