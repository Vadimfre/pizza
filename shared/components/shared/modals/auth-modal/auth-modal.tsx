"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { Button, Dialog } from "@/shared/components/ui";
import { DialogContent } from "@/shared/components/ui/dialog";
import { LoginForm } from "./forms/loginForm";
import { RegisterForm } from "./forms/registerForm";

interface Props {
  open: boolean;
  onClose: VoidFunction;
}

export const AuthModal: React.FC<Props> = ({ open, onClose }) => {
  const [type, setType] = useState<"login" | "register">("login");

  const onSwitchType = () => {
    setType(type === "login" ? "register" : "login");
  };

  const handleClose = () => {
    onClose();
    setType("login");
  };

  return (
    <Dialog  open={open} onOpenChange={handleClose}>
      <DialogContent className="w-full bg-white p-10">

        <div className="flex gap-2">
          <Button
            variant="secondary"
            onClick={() =>
              signIn("github", {
                callbackUrl: "/",
                redirect: true,
              })
            }
            type="button"
            className="gap-2 h-12 p-2 flex-1"
          >
            <img
              className="w-6 h-6"
              src="https://github.githubassets.com/favicons/favicon.svg"
            />
            GitHub
          </Button>
        </div>

      </DialogContent>
    </Dialog>
  );
};
