import React, { Component }  from 'react';



class TextForm extends Component {

    state = {
        value: ""
    }

    submit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.value)
    }

    change = (e) => {
        this.setState({
            value: e.target.value
        })
    }


    render() {
        return (
            <form onSubmit={this.submit}>
                <input
                    value={this.state.value}
                    onChange={this.change}/>

                <input type="submit" value="Filter Results"/>
            </form>


        );
    }


}

export default TextForm;
