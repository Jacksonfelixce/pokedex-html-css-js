

// Variaveis que trabalhao com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon =>{
    pokemon.addEventListener('click', () => {
    //remover a classe aberto so do cartao que esta aberto
    const cartaoPokemonAberto = document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove('aberto')

    // Ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartao mostrar
    const idPokemonSelecionado = pokemon.attributes.id.value
    console.log(idPokemonSelecionado)
    
    const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
    const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

    // remover a classe ativo que marca o pokemon selecionado
    const pokemonAtivoNaListagem = document.querySelector('.ativo')
    pokemonAtivoNaListagem.classList.remove('ativo')

    //adicionar a classe ativo que marca o pokemon selecionado
    const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
    pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})