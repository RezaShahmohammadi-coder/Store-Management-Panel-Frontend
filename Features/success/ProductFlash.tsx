"use client";

import { useEffect, useState } from "react";
import SuccessAlert from ".//SuccessFormAlert";

export default function ProductFlash() {

  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {

    const flashMessage =
      sessionStorage.getItem("flashMessage");

    if (!flashMessage) {
      return;
    }

    setMessage(flashMessage);

    sessionStorage.removeItem("flashMessage");

  }, []);

  if (!message) {
    return null;
  }

  return (
    <SuccessAlert message={message} />
  );
}