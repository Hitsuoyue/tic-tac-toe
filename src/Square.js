import React, {Component} from 'react';

class Square extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    putValue = (e, newMaster, master) => {
        console.log(this.props, master);

        this.setState({
            value: master
        });
        this.props.changeMaster(e, newMaster);
    }

    render(){
        const { master } = this.props;
        const { value } = this.state;
        let newMaster = '';
        if(master === 'A'){
            newMaster = 'B';
        }else{
            newMaster = 'A';
        }
        return(
            <button
                className="square"

                onClick={(e) => this.putValue(e, newMaster, master)}
            >
                {value}
            </button>
        )
    }
}

export default Square;
