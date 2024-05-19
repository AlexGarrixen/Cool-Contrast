import { Hero } from "./hero";
import { Releases } from "./releases";
import { Tours } from "./tours";

export function LandingPage() {
  return (
    <div>
      <Hero />
      <Releases />
      <Tours />
    </div>
  );
}
