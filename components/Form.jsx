import React from "react";
import Link from "next/link";

const Form = ({
  type,
  post,
  setPost,
  isSubmitting,
  handleSubmit,
}) => {
  return (
    <section className="flex-col flex w-full max-w-full">
      <h1 className="text-left head_text">
        <span className="blue_gradient">
          {type} Post
        </span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing pompts with world
        , and let your imaginaton run wild with
        any AI-powered platform
      </p>

      <form
        className="mt-10 flex flex-col w-full
        max-w-2xl gap-7 glassmorphism"
        onSubmit={handleSubmit}
      >
        <label>
          <span
            className="font-satoshi font-semibold
          text-gray-700"
          >
            Your AI Prompt
          </span>
        </label>
        <textarea
          value={post.prompt}
          onChange={(e) =>
            setPost({
              ...post,
              prompt: e.target.value,
            })
          }
          required
          placeholder="Type AI prompt..."
          className="form_textarea"
        ></textarea>
        <label>
          <span
            className="font-satoshi font-semibold
          text-gray-700"
          >
            Tag{" "}
            <span className="font-normal">
              (#description, #webdevelopment)
            </span>
          </span>
        </label>
        <input
          value={post.tag}
          onChange={(e) =>
            setPost({
              ...post,
              tag: e.target.value,
            })
          }
          required
          placeholder="Enter tags"
          className="form_input"
        ></input>
        <div className="flex justify-end gap-5">
          <Link
            className="bg-slate-100 px-3 py-2 rounded-[4px]"
            href={"/"}
          >
            Cancel
          </Link>
          <button
            className="px-3 py-2 bg-orange-500
          rounded-full text-white font-semibold"
          >
            {isSubmitting
              ? `${type}...`
              : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
