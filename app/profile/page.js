"use client";
import React, {
  useState,
  useEffect,
} from "react";
import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log(session?.user.id);
    const fetchPosts = async () => {
      const data = await (
        await fetch(
          `/api/users/${session?.user.id}/posts`
        )
      ).json();
      setPosts(data);
    };
    if (session?.user.id) {
      fetchPosts();
    }
  }, [session]);
  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete the prompt??"
    );

    if (hasConfirmed) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/prompt/${post._id}`,
          {
            method: "DELETE",
          }
        );
        const filteredPosts = posts.filter(
          (obj) => obj._id !== post._id
        );
        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };
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
