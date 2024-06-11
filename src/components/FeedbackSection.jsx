import { useState } from "react";
import Button from "./button/Button";
function StateVsRef() {
  const [inputVal, setInputVal] = useState();
  return (
    <div>
      <h3>Input value: {inputVal}</h3>
      <input
        type="text"
        className="control"
        onChange={(event) => setInputVal(event.target.value)}
        value={inputVal}
      />
    </div>
  );
}
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
      <form style={{ marginBottom: "1rem" }}>
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
        <pre>
          name: {form.name}
          <br />
          <br />
          reason: {form.reason}
        </pre>
        <Button
          disabled={form.hasError}
          isActive={!form.hasError}
          style={{ marginTop: "1rem" }}
        >
          Отправить{" "}
        </Button>
      </form>

      <StateVsRef></StateVsRef>
    </section>
  );
}
