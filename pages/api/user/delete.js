import dbConnect from "@/db/connect";
import Transaction from "@/db/models/Transaction";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  if (request.method !== "DELETE") {
    return response.status(405).json({ status: "Method not allowed" });
  }

  const session = await getServerSession(request, response, authOptions);

  if (!session) {
    return response.status(401).json({ status: "Not authorized" });
  }

  try {
    await dbConnect();
    const token = await getToken({ req: request });
    const userId = token?.sub;

    await Transaction.deleteMany({ owner: userId });

    return response
      .status(200)
      .json({ status: "User data deleted successfully" });
  } catch (error) {
    console.error(error);
    return response.status(400).json({ status: error.message });
  }
}
