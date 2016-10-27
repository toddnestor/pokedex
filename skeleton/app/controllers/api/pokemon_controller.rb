class Api::PokemonController < ApplicationController
  before_action :set_pokemon, only: [:show, :destroy, :update]

  def index
    @pokemons = Pokemon.all
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)

    if @pokemon.save
      render :show
    else
      render json: @pokemon.errors.full_messages
    end
  end

  def destroy
    @pokemon.destroy
    render :show
  end

  def update
    if @pokemon.update(pokemon_params)
      render :show
    else
      render json: @pokemon.errors.full_messages
    end
  end

  private
  def set_pokemon
    @pokemon = Pokemon.find(params[:id])
  end

  def pokemon_params
    params.require(:pokemon).permit(:name, :image_url, :poke_type, :attack, :defense, moves: [])
  end
end
