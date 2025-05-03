"use client";
import "./registration.scss";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { Divider } from "primereact/divider";
import { useRouter } from "next/navigation";

export default function Registration() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const header = <div className="font-bold mb-3">Pick a password</div>;
  const footer = (
    <>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0 line-height-3">
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </>
  );

  return (
    <div className="registration-page">
      <div className="page-wrap">
        <div className="flex flex-column justify-content-center align-item-center w-full mb-4">
          <h2 className="text-center">PYADMIN</h2>
        </div>
        <div className="flex flex-column gap-1 mb-2">
          <label htmlFor="email">Email</label>
          <InputText id="email" type="email" className="pr-5" />
        </div>
        <div className="flex flex-column gap-1 mb-4">
          <label htmlFor="password">Password</label>
          <Password
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            toggleMask
            header={header}
            footer={footer}
          />
        </div>
        <div className="flex flex-column justify-content-center align-item-center w-full">
          <Button
            label="Registration"
            className="w-full"
            onClick={() => router.push("/login")}
          ></Button>
        </div>
      </div>
    </div>
  );
}
