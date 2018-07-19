import React, { Component } from 'react';

import Input from './input';

class Card extends Component {



    constructor() {
        super()

        this.state = {
            color: 'BLUE',
            pluralNoun: ''
        }

        this.handleInputChange = this.handleInputChange(this);
    }


    handleInputChange(event) {
        console.log(this.state.color);
        this.setState({ color: 'event.target.value' })
    }
    
    


    render() {        
        return (
            <div className="card">
                <h1>{this.state.color}</h1>
                { Input('Color', this.state.color) }
                { Input('Plural Noun', this.state.pluralNoun, this.handleInputChange)}
            </div>    
        )
    }
}

export default Card;