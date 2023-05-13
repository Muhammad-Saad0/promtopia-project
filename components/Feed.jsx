"use client";
import React, { useEffect } from "react";
import { useState } from "react";

const promptList = () => {
  return (
    <div className="text-black">
      this is prompt list
    </div>
  );
};

const Feed = () => {
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await (
        await fetch("/api/prompt")
      ).json();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  const [posts, setPosts] = useState([]);
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
      <promptList />
    </section>
  );
};

export default Feed;
