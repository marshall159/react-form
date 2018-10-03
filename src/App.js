import React, { Component } from 'react';
import Table from './Table';

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

    render() {

        return(
            <div className="container">
                <Table 
                    characterData={this.state.characters} 
                    removeCharacter={this.removeCharacter}
                />
            </div>
        )
    }
}

export default App;