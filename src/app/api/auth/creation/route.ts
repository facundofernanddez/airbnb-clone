import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET() {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user || user === null || !user.id)
    throw new Error("Something went wrong");

  let dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });
}
