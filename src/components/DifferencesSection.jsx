import { differences } from "../data";
import Button from "./button/Button";
import { useState } from "react";
export default function DifferencesSection() {
  const [contentType, setcontent] = useState(null);
  function handleclick(contentType) {
    setcontent(contentType);
  }
  return (
    <section>
      <h3>Чем мы отличаемся от других</h3>
      <Button
        isActive={contentType === "way"}
        onClick={() => handleclick("way")}
      >
        подход
      </Button>
      <Button
        isActive={contentType === "easy"}
        onClick={() => handleclick("easy")}
      >
        доступность
      </Button>
      <Button
        isActive={contentType === "program"}
        onClick={() => handleclick("program")}
      >
        концентрация
      </Button>
      {contentType ? <p>{differences[contentType]}</p> : <p>Нажми на меня</p>}
    </section>
  );
}
