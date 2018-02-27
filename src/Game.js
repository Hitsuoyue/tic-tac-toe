import React, {Component} from 'react';
import Board from './Board';

class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
            master: 'A'
        }
    }

    changeMaster = (e, master) => {
        this.setState({master})
    }

    render(){
        const { master } = this.state;

        return(
            <div className='game'>
                Next Player:{master}
                <Board
                    changeMaster={this.changeMaster}
                    master={this.state.master}
                    />
            </div>
        )
    }
}

export default Game;
