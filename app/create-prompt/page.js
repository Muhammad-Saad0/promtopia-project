"use client";

import React from "react";
import Form from "@components/Form";
import { useState } from "react";

const createPost = () => {
  const [isSubmitting, setIsSubmitting] =
    useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = () => {};
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
