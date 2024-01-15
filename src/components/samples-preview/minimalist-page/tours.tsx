import { css } from "@root/styled-system/css";

import { ArrowRightUpLine } from "@/components/icons";

import { applyStyle } from "../utils";

const classes = {
  heading: css({
    textStyle: "display-lg",
    textAlign: "center",
    fontWeight: "bold",
    mb: "8",
    lg: { textStyle: "display-xl", mb: "12" },
  }),

  listItem: css({
    _lastOfType: {
      "& > article": {
        pb: "0",
        borderBottom: "none",
      },
    },
    _firstOfType: {
      "& > article": {
        pt: "0",
      },
    },
  }),

  tour: css({
    display: "flex",
    gap: "4",
    py: "6",
    flexDirection: "column",
    borderBottom: "1px solid",
    borderColor: "currentcolor",
    lg: { flexDirection: "row" },
  }),

  tourName: css({ fontWeight: "bold", textStyle: "display-xs", lg: { w: "5/12" } }),

  tourLocation: css({ fontWeight: "500", lg: { w: "2/12" } }),

  tourZone: css({ truncate: true, lg: { w: "2/12" } }),

  tourYear: css({ lg: { w: "2/12" } }),

  tourAction: css({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    "& span": { mr: "2" },
    "& svg": { fontSize: "icon-20" },
    lg: {
      "& span": { display: "none" },
    },
  }),
};

const tours: TourItemProps[] = [
  {
    name: "Ultra Miami",
    location: "Miami, United States",
    zone: "Bayfront Park",
    year: "2024-07-12",
  },
  {
    name: "Siam Songkran Music Festival",
    location: "Bangkok, Thailand",
    zone: "Urban Yard",
    year: "2024-07-12",
  },
  {
    name: "Landstreff Stavanger",
    location: "Stavanger, Norway",
    zone: "Kongeparken, Rogaland Fritidspark AS",
    year: "2024-07-12",
  },
  {
    name: "Solidays Festival",
    location: "Paris, France",
    zone: "Hippodrome de Longchamp",
    year: "2024-07-12",
  },
  {
    name: "Bayside Festival",
    location: "Helsingborg, Sweden",
    zone: "Olympia Park",
    year: "2024-07-12",
  },
];

export function Tours() {
  return (
    <section style={applyStyle("color")}>
      <div className={classes.heading}>TOURS</div>
      <ul>
        {tours.map((props) => (
          <li key={props.name} className={classes.listItem}>
            <TourItem {...props} />
          </li>
        ))}
      </ul>
    </section>
  );
}

interface TourItemProps {
  name: string;
  location: string;
  zone: string;
  year: string;
}

function TourItem({ location, name, year, zone }: TourItemProps) {
  return (
    <article className={classes.tour}>
      <div className={classes.tourName}>{name}</div>
      <div className={classes.tourLocation}>{location}</div>
      <div className={classes.tourZone}>{zone}</div>
      <div className={classes.tourYear}>{year}</div>
      <div className={classes.tourAction}>
        <span>Get Ticket</span>
        <ArrowRightUpLine />
      </div>
    </article>
  );
}
