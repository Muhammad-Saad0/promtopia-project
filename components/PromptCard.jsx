import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import {
  usePathname,
  useRouter,
} from "next/navigation";

const PromptCard = ({
  post,
  handleEdit,
  handleDelete,
}) => {
  const { data } = useSession();
  const [session, setSession] = useState(data);
  const pathName = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    console.log(post);
    console.log(session);
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <div className="prompt_card my-6">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 gap-3 justify-start 
        flex cursor-pointer items-center"
        >
          <Image
            src={post.creator.image}
            width={40}
            height={40}
            className="rounded-full object-contain"
            alt="profile-photo"
          />
          <div className="flex flex-col">
            <h3
              className="font-satoshi font-semibold
            text-gray-900"
            >
              {post.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.creator.email}
            </p>
          </div>
        </div>
        <div
          className="copy_btn"
          onClick={handleCopy}
        >
          <Image
            alt="..."
            width={20}
            height={20}
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
          />
        </div>
      </div>
      <p
        className="my-4 font-satoshi text-sm 
      text-gray-700"
      >
        {post.prompt}
      </p>
      <p
        className="cursor-pointer font-inter
      text-sm blue_gradient"
        onClick={() => {}}
      >
        {post.tag}
      </p>
      {session?.user.id === post.creator._id &&
        pathName === "/profile" && (
          <div>
            <p
              className="font-inter text-sm green_gradient cursor-pointer"
              onClick={() => {
                handleEdit && handleEdit(post);
              }}
            >
              Edit
            </p>
            <p
              className="font-inter text-sm orange_gradient cursor-pointer"
              onClick={() => {
                handleDelete &&
                  handleDelete(post);
              }}
            >
              Delete
            </p>
          </div>
        )}
    </div>
  );
};

export default PromptCard;
