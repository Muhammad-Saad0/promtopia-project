import { connectToDatabase } from "@lib/mongodb";
import Prompt from "@models/prompt";

export async function GET(request, { params }) {
  console.log(params);
  try {
    await connectToDatabase();
    const data = await Prompt.find({
      creator: params.id,
    }).populate("creator");
    console.log(data);
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
