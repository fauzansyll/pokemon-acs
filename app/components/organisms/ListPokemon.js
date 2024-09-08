import React, { useEffect, useState } from "react";
import api from "@/app/api/api";
import Card from "../atoms/Card";

const PokemonComponent = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [activeCard, setActiveCard] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);

  const apiInstance = api();

  useEffect(() => {
    async function fetchData() {
      try {
        const allPokemon = await apiInstance.getPokemon();
        setPokemonList(allPokemon);

        const detailPromises = allPokemon.map((pokemon) =>
          apiInstance.fetchData({ url: pokemon.url })
        );

        const detailsResponse = await Promise.all(detailPromises);
        setPokemonDetails(detailsResponse);

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

        setCategories(uniqueCategories);
        setTypes(uniqueTypes);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    }

    fetchData();
  }, []);

  const handleCardClick = (name) => {
    setActiveCard((prevActiveCard) => (prevActiveCard === name ? null : name));
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
    );

  const sortedPokemon = filteredPokemon.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  console.log("Pokemon List", pokemonList);
  console.log("Pokemon Detail", pokemonDetails);

  return (
    <div>
      <h1>Pokémon List</h1>

      <div className="filters text-black">
        <input
          type="text"
          placeholder="Search by name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select onChange={(e) => setSelectedType(e.target.value)}>
          <option value="">All Types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Sort by Name (A-Z)</option>
          <option value="desc">Sort by Name (Z-A)</option>
        </select>
      </div>

      <div className="flex gap-5 flex-wrap p-10">
        {sortedPokemon.map((pokemon) => (
          <Card
            key={pokemon.name}
            data={pokemon}
            isActive={activeCard === pokemon.name}
            onCardClick={() => handleCardClick(pokemon.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonComponent;
