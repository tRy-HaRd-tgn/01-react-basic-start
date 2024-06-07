import WayToTeach from "./WayToTeach";
import { ways } from "../data";
export default function TeachingSeaction() {
  return (
    <section>
      <h3>Наш подход к обучению</h3>
      <ul>
        {ways.map((way) => (
          <WayToTeach key={way.description} {...way} />
        ))}
      </ul>
    </section>
  );
}
