import React, {Component} from 'react';
import Step from './Step';

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
                <Step key={index} data={data} onStepClick={this.props.onStepClick}/>
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
