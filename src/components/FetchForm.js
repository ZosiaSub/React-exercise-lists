import React, { Component }  from 'react';



class FetchForm extends Component {


    input = null //referencja do pola input z liczbą pobieranych elementów
    //zostaje dodane przez funkcje dostarczoną do atrybutu ref

    state = {
        value: '99'
    }

    submit = (e) => {
        e.preventDefault()   //zatrzymuje wysyłanie formularza do serwera i nie przeładowuje strony
        this.props.onSubmit(this.input.value)
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input type="number"
                       defaultValue={10}
                       ref={element => this.input = element} />
                <input type="submit" value="Fetch Data" />
            </form>


        );
    }


}

export default FetchForm;

//