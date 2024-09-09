import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextInput, SelectInput } from "../atoms/Input";
import {
  setSearchText,
  setSelectedAbility,
  setSelectedCategory,
  selectedType,
  selectedAbi,
  setSelectedType,
  // setSortOrder,
} from "../../store/actions";

const Filters = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.searchText);
  const selectedCategory = useSelector((state) => state.selectedCategory);
  const selectedType = useSelector((state) => state.selectedType);
  const selectedAbi = useSelector((state) => state.selectedAbi);
  const categories = useSelector((state) => state.categories);
  const types = useSelector((state) => state.types);
  const abilities = useSelector((state) => state.ability);

  return (
    <div className="text-black flex flex-col md:flex-row md:w-full gap-2">
      <TextInput
        value={searchText}
        onChange={(value) => dispatch(setSearchText(value))}
        placeholder="Search by name"
      />
      <SelectInput
        options={categories}
        value={selectedCategory}
        onChange={(value) => dispatch(setSelectedCategory(value))}
        defaultOption="All Categories"
      />
      <SelectInput
        options={types}
        value={selectedType}
        onChange={(value) => dispatch(setSelectedType(value))}
        defaultOption="All Types"
      />
    </div>
  );
};

export default Filters;
