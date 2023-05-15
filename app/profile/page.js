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
  const handleDelete = (post) => {};
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
