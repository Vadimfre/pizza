import { prisma } from "@/prisma/prisma-client";
import { ProfileForm } from "@/shared/components/shared/profileForm";
import { getUserSession } from "@/shared/lib/GetUserSession";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getUserSession();

  if (!session) {
    return redirect("/not-auth");
  }
  Notification.requestPermission();

  const user = await prisma.user.findFirst({
    where: {
      id: Number(session?.id),
    },
  });

  return <ProfileForm data={user!} />;
}
