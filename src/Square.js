import React, {Component} from 'react';

class Square extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    putValue = (e, newMaster, master) => {
        const { value } = this.props;
        if(value === null){
            this.props.changeMaster(e, this.props.index);
        }
    }

    render(){
        const { master, value } = this.props;

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
