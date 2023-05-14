"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import PromptCard from "./PromptCard";

const PromptList = ({ data }) => {
  return (
    <div>
      {data.map((prompt) => {
        console.log(prompt);
        return (
          <PromptCard
            key={prompt._id}
            post={prompt}
          />
        );
      })}
    </div>
  );
};

const Feed = () => {
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await (
        await fetch("/api/prompt")
      ).json();
      console.log(posts);
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
      <PromptList data={posts} />
    </section>
  );
};

export default Feed;
