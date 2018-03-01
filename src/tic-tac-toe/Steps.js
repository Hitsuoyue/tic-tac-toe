import React, {Component} from 'react';

class Steps extends Component{

    /**
     * 渲染步骤
     * @returns {*}
     */
    renderSteps = () => {
        const { history } = this.props;
        let steps = [];
        history.forEach((item,index)=>{
            let data = {
                master: item.master || '',
                squares: item.squares || [],
                index: index
            }
            steps.push(
                <button
                    key={index}
                    className='step-btn'
                    onClick={e=>this.props.onStepClick(e, data)}>
                    step{index}
                </button>
            )
        })
        return steps;
    }

    render(){
        return(
            <div className='steps'>
                {this.renderSteps()}
            </div>
        )
    }
}

export default Steps;
