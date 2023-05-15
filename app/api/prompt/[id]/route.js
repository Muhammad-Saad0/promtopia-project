import { connectToDatabase } from "@lib/mongodb";
import Prompt from "@models/prompt";

export async function GET(request, { params }) {
  try {
    await connectToDatabase();
    const data = await Prompt.findById(
      params.id
    ).populate("creator");
    if (!data) {
      return new Response("Prompt not found", {
        status: 404,
      });
    }
    return new Response(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify("failed to fetch prompt"),
      {
        status: 500,
      }
    );
  }
}

export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();

  try {
    await connectToDatabase();
    const existingPrompt = await Prompt.findById(
      params.id
    );

    if (!existingPrompt)
      return new Response("Prompt not found", {
        status: 404,
      });
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();
    return new Response("Prompt updated", {
      status: 200,
    });
  } catch (error) {
    return new Response(
      "Failed to update the prompt",
      { status: 500 }
    );
  }
};

export const DELETE = async (req, { params }) => {
  const id = params.id;
  try {
    await connectToDatabase();

    await Prompt.findByIdAndRemove(params.id);
    return new Response(
      "Prompt deleted successfully",
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      "Failed to delete the prompt",
      { status: 500 }
    );
  }
};
