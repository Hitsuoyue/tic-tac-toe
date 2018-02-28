import React, {Component} from 'react';

class Header extends Component{

    render(){
        const { winner, master } = this.props;
        let status = winner ? `Winner is: ${winner}` : `Next Player: ${master}` ;

        return(
            <div className='title'>
                {status}
                <button
                    className='again'
                    onClick={this.props.refreshGame}
                />
            </div>
        )
    }
}

export default Header;
