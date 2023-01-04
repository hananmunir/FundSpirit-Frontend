import React, { useState } from "react";
import styles from "./Filter.module.css";
const Filter = ({ campaigns, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchText, setSearchText] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleFilterClick = () => {
    let filteredCampaigns = [...campaigns];

    if (selectedCategory) {
      filteredCampaigns = filteredCampaigns.filter(
        (campaign) => campaign.category === selectedCategory
      );
    }

    if (searchText) {
      filteredCampaigns = filteredCampaigns.filter((campaign) =>
        campaign.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    onFilterChange(filteredCampaigns);
  };

  return (
    <div className={styles.filterContainer}>
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value=''>All categories</option>
        <option value='food'>Food</option>
        <option value='clothes'>Clothes</option>
        <option value='books'>Books</option>
      </select>
      <input
        type='text'
        placeholder='Search by name'
        value={searchText}
        onChange={handleSearchChange}
      />
      <button onClick={handleFilterClick}>Filter</button>
    </div>
  );
};

export default Filter;
