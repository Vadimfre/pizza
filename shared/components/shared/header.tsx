"use client";

import { cn } from "@/shared/lib/utils";
import { Container } from "./container";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./SearchInput";
import { CartButton } from "./CartButton";
import { ProfileButton } from "./profile-button";
import { AuthModal } from "./modals/auth-modal/auth-modal";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { registerServiceWorker } from "@/shared/lib/registerServiceWorker";

interface Props {
  hasCart?: boolean;
  hasSearch?: boolean;
  className?: string;
}

const Header: React.FC<Props> = ({
  className,
  hasSearch = true,
  hasCart = true,
}) => {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.has("verified")) {
      setTimeout(() => {
        toast.success("Ваш аккаунт подтвержден");
        router.replace("/");
      }, 500);
    }
  }, []);
  useEffect(() => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        registerServiceWorker().then((registration) => {
          const vapidPublicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
          const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey!);

          registration.pushManager
            .subscribe({
              userVisibleOnly: true,
              applicationServerKey: convertedVapidKey,
            })
            .then((subscription) => {
              const notificationData = {
                subscription: subscription,
                title: "Hello!",
                body: "You have a new notification.",
              };

              fetch("/api/send-notification", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(notificationData),
              }).then((response) => response.json());
            });
        });
      } else {
        console.error("Notification permission denied");
      }
    });
  }, []);

  function urlBase64ToUint8Array(base64String: string) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  return (
    <Suspense>
      <header className={cn(" border-b", className)}>
        <Container className="flex items-center justify-between py-8">
          {/*Левая часть*/}
          <Link href="/">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="Logo" width={35} height={35} />
              <div>
                <h1 className="texx-2xl uppercase font-black">Sema pizza</h1>
                <p className="text-sm text-gray-400 leading-3">
                  вкусней уже некуда
                </p>
              </div>
            </div>
          </Link>

          {hasSearch && (
            <div className="mx-10 flex-1">
              <SearchInput />
            </div>
          )}

          {/*Правая часть*/}
          <div className="flex items-center gap-3">
            <AuthModal
              open={openAuthModal}
              onClose={() => {
                setOpenAuthModal(false);
              }}
            />

            <ProfileButton onClickOpenModal={() => setOpenAuthModal(true)} />
            {hasCart && (
              <div>
                <CartButton />
              </div>
            )}
          </div>
        </Container>
      </header>
    </Suspense>
  );
};

export default Header;
