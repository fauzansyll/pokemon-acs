import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextInput, SelectInput } from "../atoms/Input";
import {
  setSearchText,
  setSelectedAbility,
  setSelectedCategory,
  setSelectedType,
  setSortOrder,
} from "../../store/actions";

const Filters = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.searchText);
  const selectedCategory = useSelector((state) => state.selectedCategory);
  const sortOrder = useSelector((state) => state.sortOrder);
  const selectedType = useSelector((state) => state.selectedType);

  const categories = useSelector((state) => state.categories);
  const types = useSelector((state) => state.types);
  const abilities = useSelector((state) => state.abilities);

  const handleSortOrderChange = (order) => {
    dispatch(setSortOrder(order));
  };

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

      <SelectInput
        options={["A-Z", "Z-A"]}
        value={sortOrder}
        onChange={(value) => handleSortOrderChange(value)}
        defaultOption="Default"
      />
    </div>
  );
};

export default Filters;
