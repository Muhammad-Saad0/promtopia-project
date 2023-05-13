import { connectToDatabase } from "@lib/mongodb";
import Prompt from "@models/prompt";

export async function GET(request) {
  try {
    await connectToDatabase();
    const data = await Prompt.find({}).populate(
      "creator"
    );
    return new Response(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify("failed to fetch posts"),
      {
        status: 500,
      }
    );
  }
}
