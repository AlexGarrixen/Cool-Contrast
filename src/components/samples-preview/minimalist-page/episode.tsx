import { css, cx } from "@root/styled-system/css";
import { container } from "@root/styled-system/patterns";

import { ArrowRightUpLine } from "@/components/icons";

import { applyStyle } from "../utils";

const classes = {
  root: css({ display: "flex", gap: "8", flexDirection: "column", lg: { flexDirection: "row" } }),

  imgContainer: css({
    order: -1,
    aspectRatio: "16/9",
    flex: 1,
    "& > img": { width: "100%", height: "100%", objectFit: "cover" },
    lg: { order: "initial" },
  }),

  content: css({
    display: "flex",
    flexDirection: "column",
    lg: { w: "5/12", justifyContent: "space-around", "& > div": { flex: 1 } },
  }),

  title: css({ textStyle: "display-md", fontWeight: "bold", lg: { textStyle: "display-lg" } }),

  body: css({ mt: "3", mb: "10" }),

  link: css({
    borderBottom: "1px solid",
    borderColor: "currentColor",
    pb: "1",
    display: "inline-flex",
    w: "max-content",
    alignItems: "center",
  }),

  linkIcon: css({ fontSize: "icon-20", ml: "2" }),
};

const imgSrc =
  "https://res.cloudinary.com/dxarbtyux/image/upload/v1705286625/color-contrast-inspector/show.webp";

export function Episode() {
  return (
    <section className={cx(container(), classes.root)} style={applyStyle("color")}>
      <div className={classes.content}>
        <div>
          <div className={classes.title}>Most insane India tour to date</div>
          <p className={classes.body}>
            We did this crazy tour in India where Ranbir Kapoor and Allu Arjun joined me on stage.
            All of the 9 shows were amazing and the energy was insane!
          </p>
        </div>

        <p className={classes.link}>
          View all episodes <ArrowRightUpLine className={classes.linkIcon} />
        </p>
      </div>
      <figure className={classes.imgContainer}>
        <img alt="episode thumbnail" height={900} loading="lazy" src={imgSrc} width={500} />
      </figure>
    </section>
  );
}
