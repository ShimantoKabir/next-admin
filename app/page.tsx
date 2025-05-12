"use client";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex justify-content-center align-items-center min-h-screen min-w-screen flex-column">
      <h3>
        Welcome to PyAdmin. A user, role, and menu management system, to explore
        please!
      </h3>
      <Button className="mt-2" onClick={(e) => router.replace("/login")}>
        Login
      </Button>
    </div>
  );
}
