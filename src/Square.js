import React, {Component} from 'react';

class Square extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    putValue = (e) => {
        const { value, winner } = this.props;
        if(value === null && !winner){
            this.props.changeMaster(e, this.props.index);
        }
    }

    render(){
        const { value } = this.props;

        return(
            <button
                className="square"
                onClick={this.putValue}
            >
                {value}
            </button>
        )
    }
}

export default Square;
