"use client";

import React, {
  useState,
  useEffect,
} from "react";
import Profile from "@components/Profile";
import { useSession } from "next-auth/react";

const MyProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await (
        await fetch(
          `/api/users/${session?.user.id}/posts`
        )
      ).json();
      setPosts(posts);
      //ONLY FETCH POSTS IF USER IS LOGGED IN
      if (session?.user.id) {
        fetchPosts();
      }
    };
  }, []);
  const handleEdit = () => {};
  const handleDelete = () => {};
  return (
    <Profile
      name="My"
      desc="Welcome to Your Personalized Page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
