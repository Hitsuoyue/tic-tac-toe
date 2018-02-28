import React, {Component} from 'react';
import Square from './Square';

class Step extends Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        const { data } = this.props;
        const { master, squares, index } = this.props.data;
        return(
            <button
                className='step-btn'
                onClick={e=>this.props.onStepClick(e, data)}>
                step{index}
            </button>
        )
    }
}

export default Step;
