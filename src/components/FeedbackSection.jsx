import { useState } from "react";
import Button from "./button/Button";
export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: false,
    reason: "help",
  });
  function NameChangeHandler(event) {
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
  }
  return (
    <section>
      <h3>Обратная связь</h3>
      <form>
        <label htmlFor="input_feedback">Ваше имя</label>
        <input
          type="text"
          id="input_feedback"
          className="control"
          value={form.name}
          onChange={NameChangeHandler}
          style={{ border: form.hasError ? "1px solid red" : null }}
        ></input>

        <label htmlFor="feedback_reason">Причина обращения </label>
        <select
          name=""
          id="feedback_reason"
          className="control"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, reason: event.target.value }))
          }
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>
      </form>
      <pre>
        name: {form.name}
        <br />
        reason: {form.reason}
        <br />
        <br />
      </pre>
      <Button disabled={form.hasError} isActive={!form.hasError}>
        Отправить{" "}
      </Button>
    </section>
  );
}
