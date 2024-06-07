import Button from "./button/Button";

export default function TabSection({ active, onChange }) {
  return (
    <>
      <Button isActive={active === "main"} onClick={() => onChange("main")}>
        Главная
      </Button>
      <Button
        isActive={active === "feedback"}
        onClick={() => onChange("feedback")}
      >
        Обратная связь
      </Button>
    </>
  );
}
