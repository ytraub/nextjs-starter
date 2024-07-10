"use client";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  const fetchFromServer = async () => {
    const req = await fetch("/api/hello/");
    const res = await req.json();

    setMessage(res.message);
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center flex-col gap-4">
      <UserButton />
      <p className="text-sm text-muted-foreground">{message}</p>
      <Button onClick={fetchFromServer}>Fetch from server</Button>
    </div>
  );
}
