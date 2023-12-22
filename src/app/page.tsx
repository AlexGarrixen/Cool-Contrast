import { ContrastResults } from "@/components/contrast-results";
import { ColorInputs } from "@/components/color-inputs";
import { SamplesPreview } from "@/components/samples-preview";

export default function Home() {
  return (
    <>
      <ContrastResults />
      <ColorInputs />
      <SamplesPreview />
    </>
  );
}
