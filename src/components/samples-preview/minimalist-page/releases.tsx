import { css } from "@root/styled-system/css";

import { Button } from "@/components/primitives/button";
import { Play } from "@/components/icons";

import { applyStyle } from "../utils";

const classes = {
  heading: css({
    textStyle: "display-lg",
    textAlign: "center",
    fontWeight: "bold",
    lg: { textStyle: "display-xl" },
  }),

  desc: css({ textStyle: "body-base", textAlign: "center", mt: "2", lg: { textStyle: "body-lg" } }),

  releasesGrid: css({
    display: "grid",
    gap: "8",
    mt: "8",
    lg: { gridTemplateColumns: "2", mt: "12" },
    xl: { gridTemplateColumns: "3" },
  }),

  releaseImg: css({ aspectRatio: "1/1", "& img": { w: "100%", h: "100%", objectFit: "cover" } }),

  releaseContent: css({
    display: "flex",
    mt: "3",
    alignItems: "center",
    gap: "3",
    "& > div": { flex: 1 },
  }),

  releaseTitle: css({ textStyle: "display-sm", fontWeight: "bold" }),

  releaseAuthors: css({ textStyle: "body-base" }),
};

const releases: ReleaseItemProps[] = [
  {
    title: "Real Love",
    authors: "Martin Garrix & Lloyiso",
    imgSrc:
      "https://res.cloudinary.com/dxarbtyux/image/upload/v1705270992/color-contrast-inspector/real-love.webp",
  },
  {
    title: "Loop",
    authors: "Martin Garrix, DallasK ft Sasha Alex Sloan",
    imgSrc:
      "https://res.cloudinary.com/dxarbtyux/image/upload/v1705270992/color-contrast-inspector/loop.webp",
  },
  {
    title: "Aurora",
    authors: "Martin Garrix & Blinders",
    imgSrc:
      "https://res.cloudinary.com/dxarbtyux/image/upload/v1705270993/color-contrast-inspector/aurora.webp",
  },
  {
    title: "Oxygen",
    authors: "Martin Garrix, Dubvision ft Jordan Grance",
    imgSrc:
      "https://res.cloudinary.com/dxarbtyux/image/upload/v1705270993/color-contrast-inspector/oxygen.webp",
  },
  {
    title: "Hurricane",
    authors: "Martin Garrix, Sentinel & Bonn",
    imgSrc:
      "https://res.cloudinary.com/dxarbtyux/image/upload/v1705271946/color-contrast-inspector/hurricane.webp",
  },
  {
    title: "Hero",
    authors: "Martin Garrix x JVKE",
    imgSrc:
      "https://res.cloudinary.com/dxarbtyux/image/upload/v1705271958/color-contrast-inspector/hero.webp",
  },
];

export function Releases() {
  return (
    <section style={applyStyle("color")}>
      <div>
        <div className={classes.heading}>RELEASES</div>
        <p className={classes.desc}>Check the latest releases of Martin Garrix right here!</p>
      </div>
      <ul className={classes.releasesGrid}>
        {releases.map((props) => (
          <li key={props.title}>
            <ReleaseItem {...props} />
          </li>
        ))}
      </ul>
    </section>
  );
}

interface ReleaseItemProps {
  title: string;
  authors: string;
  imgSrc: string;
}

function ReleaseItem({ authors, title, imgSrc }: ReleaseItemProps) {
  return (
    <article>
      <figure className={classes.releaseImg}>
        <img alt="relase img" height={800} loading="lazy" src={imgSrc} width={800} />
      </figure>
      <div className={classes.releaseContent}>
        <Button
          isIconOnly
          className={css({ borderColor: "currentcolor!", color: "currentColor!" })}
        >
          <Play />
        </Button>
        <div>
          <p className={classes.releaseTitle}>{title}</p>
          <p className={classes.releaseAuthors}>{authors}</p>
        </div>
      </div>
    </article>
  );
}
