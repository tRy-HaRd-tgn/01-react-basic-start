import { useState } from "react";
import logo from "/public/logo-name.svg";
import "./header.css";
export default function Header() {
  const [now, setNow] = useState(new Date());
  setInterval(() => setNow(new Date()), 1000);
  return (
    <header>
      <img src={logo} alt={"Result"} />
      <span>
        Время сейчас: {now.toLocaleTimeString() /* позволяет выводить время */}
      </span>
    </header>
  );
}
