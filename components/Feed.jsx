"use client";
import React from "react";
import { useState } from "react";

const Feed = () => {
  const [searchText, setSearchText] =
    useState("");
  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          className="search_input peer"
          placeholder="Search for a tag or username"
          required
          onChange={handleSearchChange}
          value={searchText}
        />
      </form>
    </section>
  );
};

export default Feed;
