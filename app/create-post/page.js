import React from "react";
import Form from "@components/Form";

const createPost = () => {
  const [isSubmitting, setIsSubmitting] =
    useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = () => {};
  return (
    <section>
      <Form
        type="create"
        post={post}
        setPost={setPost}
        isSubmitting={isSubmitting}
        handleSubmit={createPrompt}
      />
    </section>
  );
};

export default createPost;
