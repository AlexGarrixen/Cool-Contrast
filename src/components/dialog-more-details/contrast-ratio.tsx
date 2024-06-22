import { useAtomValue } from "jotai";
import { token } from "@root/styled-system/tokens";

import { wcagLevelsResult, contrastRelation, background, foreground } from "@/store";
import { Icons } from "@/components/icons-lib";

import { Button } from "../primitives/button";

import { classes } from "./contrast-ratio.styled";

export function ContrastRatio() {
  const bg = useAtomValue(background);
  const fg = useAtomValue(foreground);
  const { contrast, feedback } = useAtomValue(contrastRelation);
  const { passAAALargeText, passAAANormalText, passAALargeText, passAANormalText } =
    useAtomValue(wcagLevelsResult);

  const lgTextAAALabel = passAAALargeText ? "Pass" : "Fail";
  const normalTextAAALabel = passAAANormalText ? "Pass" : "Fail";
  const lgTextAALabel = passAALargeText ? "Pass" : "Fail";
  const normalTextAALabel = passAANormalText ? "Pass" : "Fail";

  const lgTextAAAColor = passAAALargeText
    ? token("colors.text-success")
    : token("colors.text-error");
  const normalTextAAAColor = passAAANormalText
    ? token("colors.text-success")
    : token("colors.text-error");
  const lgTextAAColor = passAALargeText ? token("colors.text-success") : token("colors.text-error");
  const normalTextAAColor = passAANormalText
    ? token("colors.text-success")
    : token("colors.text-error");

  function getSemanticColor() {
    if (feedback === "poor") return token("colors.text-error");

    return token("colors.text-success");
  }

  return (
    <section>
      <h4 className={classes.title}>Contrast Ratio</h4>
      <div className={classes.scoreWrapper}>
        <div style={{ color: getSemanticColor() }}>
          <span className={classes.score}>{contrast.toFixed(2)}</span>
          <span className={classes.feedback}>{feedback.replace("-", " ")}</span>
        </div>
        <div className={classes.colorSelectors}>
          <Button isIconOnly size="sm" style={{ backgroundColor: bg, color: fg }}>
            bg
          </Button>
          <Button isIconOnly size="sm" style={{ backgroundColor: fg, color: bg }}>
            fg
          </Button>
        </div>
      </div>
      <div className={classes.tableWrapper}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>SIZE</th>
              <th>LEVEL AA</th>
              <th>LEVEL AAA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Small Text</td>
              <td style={{ color: normalTextAAColor }}>
                <div>
                  {normalTextAALabel} {passAANormalText ? <Icons.CheckCircle /> : <Icons.XCircle />}
                </div>
              </td>
              <td style={{ color: normalTextAAAColor }}>
                <div>
                  {normalTextAAALabel}{" "}
                  {passAAANormalText ? <Icons.CheckCircle /> : <Icons.XCircle />}
                </div>
              </td>
            </tr>
            <tr>
              <td>Large Text</td>
              <td style={{ color: lgTextAAColor }}>
                <div>
                  {lgTextAALabel} {passAALargeText ? <Icons.CheckCircle /> : <Icons.XCircle />}
                </div>
              </td>
              <td style={{ color: lgTextAAAColor }}>
                <div>
                  {lgTextAAALabel} {passAAALargeText ? <Icons.CheckCircle /> : <Icons.XCircle />}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
