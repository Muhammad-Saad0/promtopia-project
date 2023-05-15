"use client";

import React from "react";
import Form from "@components/Form";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const createPost = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");
  const [isSubmitting, setIsSubmitting] =
    useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  useEffect(() => {
    const fetchPost = async () => {
      const data = await fetch(
        `/api/prompt/${promptId}`
      );
      setPost(await data.json());
    };
    if (promptId) [fetchPost()];
  }, [promptId]);

  const editPrompt = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(
        `http://localhost:3000/api/prompt/${promptId}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            prompt: post.prompt,
            tag: post.tag,
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
        type="Edit"
        post={post}
        setPost={setPost}
        isSubmitting={isSubmitting}
        handleSubmit={editPrompt}
      />
    </section>
  );
};

export default createPost;
