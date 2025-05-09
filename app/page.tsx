"use client";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex justify-content-center align-items-center min-h-screen min-w-screen ">
      <Button onClick={(e) => router.replace("/login")}>Login</Button>
    </div>
  );
}
