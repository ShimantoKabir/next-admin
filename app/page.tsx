import { Button } from "primereact/button";
import variables from "./page.module.scss";

export default function Home() {
  return (
    <div className="card flex justify-content-center">
      <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>
      <Button label="Check" icon="pi pi-check" />
    </div>
  );
}
