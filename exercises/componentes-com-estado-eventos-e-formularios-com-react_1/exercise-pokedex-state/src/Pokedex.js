import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pokeIndex: 0,
            selection: 'Psychic'
        }
    }
    // porque passa esse props dentro do construct?
    //R: essa props é oq vem de dentro do construct
    // tem que ser um objeto?
    // R: sim

    nextPokemon = () => {
        const { pokeIndex } = this.state;
        console.log(`poke index antes do next ${pokeIndex}`);
            this.setState((state) => {
                if (pokeIndex === 8) {
                    // como colocar esse cara como prop.length?
                    // babysteps é uma otima dica
                    return ({pokeIndex: 0})
                }
                return ({pokeIndex: state.pokeIndex + 1})
            }
        );
    }

    previousPokemon = () => {
        const { pokeIndex } = this.state;
        console.log(`poke index antes do next ${pokeIndex}`);
            this.setState((state) => {
                if (pokeIndex === 0) {
                    return ({pokeIndex: 8})
                }
                return ({pokeIndex: state.pokeIndex - 1})
            }
        );
    }


    // Esse ainda está tudo errado
    selectFire = () => {
        console.log(`this.prop antes do fire ${this.props}`);
        console.log(this.props);
        this.setState({
            selection: "Fire"
        })
        // tenho que filtrar aqui os pokemons que chegam pra quando der o click só rodar naqueles
        console.log(`this.prop depois do fire ${this.props.selection}`);
        console.log(this.props);
    }

    selectPsychic = () => {

    }

    render() {
        const { pokemons } = this.props;
        const { pokeIndex } = this.state;
        // console.log(`console dentro do render ${pokemons[0]}`);
        return (
            <div className="pokedex">
                <button onClick={this.previousPokemon}>Pokemon anterior</button>
                {/* <Pokemon pokemom={pokemons[pokeIndex]} /> */}
                {pokemons
                    .filter(element => element.type === 'Fire')
                    .map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)
                }
                {/* {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)} */}
                {/* codigo antigo */}
                <button onClick={this.nextPokemon}>Próximo Pokemon</button>
                <section>
                    <button onClick={this.selectFire}>Fire</button>
                    <button onClick={this.selectPsychic}>Psychic</button>
                </section>
            </div>
        );
    }
}

export default Pokedex;