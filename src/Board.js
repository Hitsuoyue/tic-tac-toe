import React, {Component} from 'react';
import Square from './Square';

class Board extends Component{
    /**
     * 渲染面板上的 square
     * @returns {Array}
     */
    renderSquare = () =>{
        let squares = [];
        for(let i=0;i<9;i++){
            squares.push(
                <Square
                    changeMaster={this.props.changeMaster}
                    key={i}
                    master={this.props.master}/>
            )
        }
        return squares;
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
