import React, {Component} from 'react';

class Board extends Component{

    /**
     * 下棋触发
     */
    // putValue = (e, value, winner, index) => {
    //     if(value === undefined && !winner){
    //         this.props.changeMaster(e, index);
    //     }
    // }

    /**
     * 渲染面板上的 square
     * @returns {Array}
     */
    renderSquare = () =>{
        const { squares, winner } = this.props;
        let squaresBtn = [];
        for(let i=0;i<9;i++){
            squaresBtn.push(
                <button
                    key={i}
                    className="square"
                    onClick={e=>this.props.clickSquare(e, squares[i], i)}
                >
                    {squares[i]}
                </button>
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
