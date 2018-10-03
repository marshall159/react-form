import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        characters: [
            {
                'name': 'Aneel',
                'job': 'Developer'
            },
            {
                'name': 'Soda',
                'job': 'Cutest dog'
            }
        ]
    };

    removeCharacter = (index) => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = () => {
        
    }

    render() {

        return(
            <div className="container">
                <Table 
                    characterData={this.state.characters} 
                    removeCharacter={this.removeCharacter}
                />
                <Form />
            </div>
        )
    }
}

export default App;