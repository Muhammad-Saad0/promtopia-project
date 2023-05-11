export async function POST(req) {
  const data = await req.json();
  console.log(data);
  new Response({ message: "Hello world!!" });
}
