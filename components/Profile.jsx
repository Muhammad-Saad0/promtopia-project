import React from "react";
import PromptCard from "./PromptCard";

const Profile = ({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">
          {name} Profile
        </span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-16">
        {data.map((prompt) => {
          return (
            <PromptCard
              key={prompt._id}
              creator={prompt.creator?.username}
              promptText={prompt.prompt}
              tag={prompt.tag}
              creatorEmail={prompt.creator?.email}
              image={prompt.creator?.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Profile;
