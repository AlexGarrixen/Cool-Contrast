import { css } from "@root/styled-system/css";
import { container } from "@root/styled-system/patterns";

import { Button } from "@/components/primitives/button";

import { applyStyle, cssFgVar, cssBgVar } from "../utils";

const classes = {
  root: css({ py: 10 }),

  heading: css({
    fontWeight: "bold",
    mb: { base: 12, md: 16 },
    textAlign: "center",
    textStyle: { base: "display-md", sm: "display-lg", md: "display-xl" },
  }),

  tours: css({ display: "grid", gridTemplateColumns: { md: 2 }, rowGap: 10, columnGap: 8 }),

  tour: css({ display: "flex", flexDirection: "column", gap: { base: 6, sm: 10 } }),

  tourLocation: css({ textStyle: "body-base", mb: 3, display: "block" }),

  tourHeading: css({
    textStyle: { base: "display-sm", sm: "display-md", lg: "display-lg" },
    fontWeight: "bold",
    truncate: true,
  }),

  tourContentGrid: css({
    display: "grid",
    gridTemplateColumns: { base: 1, sm: 2 },
    gap: { base: 4, md: 8 },
  }),

  tourZoneHeading: css({ textStyle: "base", fontWeight: "500" }),

  tourZoneContent: css({ textStyle: "base", mt: 2, truncate: true }),

  tourBtn: css({ w: "max-content" }),
};

export function Tours() {
  return (
    <section
      className={classes.root}
      style={{
        ...applyStyle("bg"),
        ...applyStyle("color"),
      }}
    >
      <div className={container()}>
        <h2 className={classes.heading}>UPCOMING TOURS</h2>
        <ul className={classes.tours}>
          <li>
            <TourItem
              date="2024-05-21"
              location="Las Vegas,USA"
              name="OMNIA NIGHTCLUB"
              zone="Omnia Nightclub"
            />
          </li>
          <li>
            <TourItem
              date="2024-08-25"
              location="Honk Kong"
              name="CREAMFIELDS HONK KONG"
              zone="Central Hambirfront"
            />
          </li>
          <li>
            <TourItem
              date="2024-05-25"
              location="Las Vegas,United States"
              name="WET REPUBLIC"
              zone="Wet Republic"
            />
          </li>
          <li>
            <TourItem
              date="2024-08-19"
              location="Paris,France"
              name="SOLIDAYS FESTIVAL"
              zone="Hippodrome de Longchamp"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

function TourItem({
  name,
  date,
  location,
  zone,
}: {
  location: string;
  name: string;
  zone: string;
  date: string;
}) {
  return (
    <article className={classes.tour}>
      <section>
        <span className={classes.tourLocation}>{location}</span>
        <h3 className={classes.tourHeading}>{name}</h3>
      </section>
      <section className={classes.tourContentGrid}>
        <div>
          <div className={classes.tourZoneHeading}>ZONE</div>
          <p className={classes.tourZoneContent}>{zone}</p>
        </div>
        <div>
          <div className={classes.tourZoneHeading}>DATE</div>
          <p className={classes.tourZoneContent}>{date}</p>
        </div>
      </section>
      <Button
        className={classes.tourBtn}
        style={{
          ...applyStyle("bg", { fromVar: cssFgVar }),
          ...applyStyle("color", { fromVar: cssBgVar }),
        }}
      >
        BUY TICKET
      </Button>
    </article>
  );
}
