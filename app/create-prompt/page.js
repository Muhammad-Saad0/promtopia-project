"use client";

import React from "react";
import Form from "@components/Form";
import { useState } from "react";
import { useSession } from "next-auth/react";

const createPost = () => {
  const session = useSession();
  const [isSubmitting, setIsSubmitting] =
    useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      console.log(session);
      fetch(
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
