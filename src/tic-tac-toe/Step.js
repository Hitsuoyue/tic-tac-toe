import React, {Component} from 'react';

class Step extends Component{

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
