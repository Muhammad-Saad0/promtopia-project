import React from "react";
import Feed from "@components/Feed";

const page = () => {
  return (
    <section className="flex-col flex-center w-full">
      <h1 className="head_text text-center">
        Discover & share{" "}
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          AI-Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Vel, vitae maxime! Eos
        quia non repellendus distinctio placeat
        deserunt! Obcaecati, voluptas. Nisi nam
        amet optio doloribus! Vel molestias
        dignissimos nobis veniam?
      </p>
      <Feed />
    </section>
  );
};

export default page;
