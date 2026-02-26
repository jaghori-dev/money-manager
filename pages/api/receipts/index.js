export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ status: "Method not allowed" });
  }

  console.log("receipt hit");
  console.log("content-type:", request.headers["content-type"]);

  return response.status(200).json({ status: "ok" });
}
