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
                />
            )
        }
        return squaresBtn;
        // return(
        //     <Square
        //         changeMaster={this.props.changeMaster}
        //         key={i}
        //         master={this.props.master}/>
        // )
    };

    render(){
        return(
            <div className='board'>
                {/*<div className='board-row'>*/}
                    {/*{this.renderSquare(0)}*/}
                    {/*{this.renderSquare(1)}*/}
                    {/*{this.renderSquare(2)}*/}
                {/*</div>*/}
                {/*<div className='board-row'>*/}
                    {/*{this.renderSquare(3)}*/}
                    {/*{this.renderSquare(4)}*/}
                    {/*{this.renderSquare(5)}*/}
                {/*</div>*/}
                {/*<div className='board-row'>*/}
                    {/*{this.renderSquare(6)}*/}
                    {/*{this.renderSquare(7)}*/}
                    {/*{this.renderSquare(8)}*/}
                {/*</div>*/}
                {this.renderSquare()}
            </div>
        )
    }
}

export default Board;
