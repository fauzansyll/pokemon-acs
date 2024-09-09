import React, { useEffect, useState } from "react"; // Import useState
import { useSelector, useDispatch } from "react-redux";
import api from "@/app/api/api";
import Card from "../atoms/Card";
import {
  setPokemonList,
  setPokemonDetails,
  setActiveCard,
  setSearchText,
  setCategories,
  setTypes,
} from "../../store/actions";
import Filters from "../molecules/Filters";

const PokemonComponent = () => {
  const dispatch = useDispatch();
  const {
    pokemonDetails,
    searchText,
    selectedCategory,
    selectedType,
    sortOrder,
    setAbility,
    abilities,
    categories,
    types,
    activeCard,
  } = useSelector((state) => state);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiInstance = api();
    async function fetchData() {
      // try {
      //   setIsLoading(true);
      //   const allPokemon = await apiInstance.getPokemon();
      //   dispatch(setPokemonList(allPokemon));

      //   const detailPromises = allPokemon.map((pokemon) =>
      //     apiInstance.fetchData({ url: pokemon.url })
      //   );

      //   const detailsResponse = await Promise.all(detailPromises);
      //   dispatch(setPokemonDetails(detailsResponse));

      //   const uniqueCategories = [
      //     ...new Set(
      //       detailsResponse.map((pokemon) => pokemon.types[0]?.type.name)
      //     ),
      //   ];
      //   const uniqueTypes = [
      //     ...new Set(
      //       detailsResponse.map((pokemon) => pokemon.types[1]?.type.name)
      //     ),
      //   ];

      //   dispatch(setCategories(uniqueCategories));
      //   dispatch(setTypes(uniqueTypes));
      // } catch (error) {
      //   console.error("Failed to fetch data", error);
      // } finally {
      //   setIsLoading(false);
      // }
      setTimeout(async () => {
        try {
          setIsLoading(true);
          const allPokemon = await apiInstance.getPokemon();
          dispatch(setPokemonList(allPokemon));

          const detailPromises = allPokemon.map((pokemon) =>
            apiInstance.fetchData({ url: pokemon.url })
          );

          const detailsResponse = await Promise.all(detailPromises);
          dispatch(setPokemonDetails(detailsResponse));

          const uniqueCategories = [
            ...new Set(
              detailsResponse.map((pokemon) => pokemon.types[0]?.type.name)
            ),
          ];
          const uniqueTypes = [
            ...new Set(
              detailsResponse.map((pokemon) => pokemon.types[1]?.type.name)
            ),
          ];

          dispatch(setCategories(uniqueCategories));
          dispatch(setTypes(uniqueTypes));
        } catch (error) {
          console.error("Failed to fetch data", error);
        } finally {
          setIsLoading(false);
        }
      }, 2000);
    }

    fetchData();
  }, [dispatch]);

  const handleCardClick = (name) => {
    dispatch(setActiveCard(activeCard === name ? null : name));
  };

  const filteredPokemon = pokemonDetails
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .filter((pokemon) =>
      selectedCategory ? pokemon.types[0]?.type.name === selectedCategory : true
    )
    .filter((pokemon) =>
      selectedType ? pokemon.types[1]?.type.name === selectedType : true
    )
    .filter((pokemon) =>
      setAbility
        ? pokemon.abilities
            .map((ability) => ability.ability.name)
            .includes(setAbility)
        : true
    );

  const sortedPokemon = filteredPokemon.sort((a, b) => {
    return sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  return (
    <div className="md:p-10 flex flex-col gap-5">
      <h1 className="text-2xl md:text-4xl">Pokémon List</h1>
      <Filters />
      <div className="flex gap-5 flex-wrap ">
        {isLoading ? (
          <>
            {[...Array(20)].map((_, index) => (
              <Card key={index} isLoading={true} />
            ))}
          </>
        ) : (
          sortedPokemon.map((pokemon) => (
            <Card
              key={pokemon.name}
              data={pokemon}
              isActive={activeCard === pokemon.name}
              onCardClick={() => handleCardClick(pokemon.name)}
              isLoading={false}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PokemonComponent;
