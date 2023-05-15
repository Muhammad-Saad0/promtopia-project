"use client";

import React from "react";
import Form from "@components/Form";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const createPost = () => {
  const router = useRouter();
  const session = useSession();
  const [isSubmitting, setIsSubmitting] =
    useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "http://localhost:3000/api/prompt/new",
        {
          method: "POST",
          body: JSON.stringify({
            prompt: post.prompt,
            tag: post.tag,
            user: session?.data.user,
          }),
        }
      );
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="w-full">
      <Form
        type="Create"
        post={post}
        setPost={setPost}
        isSubmitting={isSubmitting}
        handleSubmit={createPrompt}
      />
    </section>
  );
};

export default createPost;
