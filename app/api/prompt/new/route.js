import { connectToDatabase } from "@lib/mongodb";
import Prompt from "@models/prompt";

export async function POST(req) {
  const { prompt, tag, user } = await req.json();
  const userId = user.id;
  try {
    await connectToDatabase();
    const newPrompt = new Prompt({ 
      creator: userId,
      prompt: prompt,
      tag: tag,
    });
    await newPrompt.save();
    return new Response(
      JSON.stringify(newPrompt),
      {
        status: 201,
      }
    );
  } catch (error) {
    return new Response(
      "failed to create new Response",
      {
        status: 500,
      }
    );
  }
}
