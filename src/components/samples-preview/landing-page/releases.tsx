import { Button } from "@/components/primitives/button";
import { releases } from "@/const/landing-preview";
import { Icons } from "@/components/icons-lib";

import { applyStyle, cssFgVar, cssBgVar } from "../utils";

import { classes } from "./releases.styled";

const releasesList = releases.slice(1);
const mainRelease = releases[0];

export function Releases() {
  return (
    <section
      style={{
        ...applyStyle("bg", { fromVar: cssFgVar }),
        ...applyStyle("color", { fromVar: cssBgVar }),
      }}
    >
      <div className={classes.sectionTop}>
        <h2 className={classes.heading}>
          PRODUCTIONS <span>& SINGLES</span>
        </h2>

        <div className={classes.wrapperDesc}>
          <p className={classes.desc}>
            Feel the energy of their music and prepare to be taken on an unforgettable journey
            through the most vibrant and exicting sounds in the world of electronic music.
          </p>
          <Button style={{ ...applyStyle("bg"), ...applyStyle("color") }} variant="solid">
            VIEW ALL RELEASES
          </Button>
        </div>
      </div>

      <div className={classes.sectionReleases}>
        <div className={classes.mainReleaseWrapper}>
          <MainRelease {...mainRelease} />
        </div>
        <div className={classes.releasesList}>
          {releasesList.map(({ author, img, title }) => (
            <CompactRelease key={title} author={author} imgSrc={img} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MainRelease({ author, img, title }: { title: string; img: string; author: string }) {
  return (
    <article>
      <figure className={classes.mainReleaseImg}>
        <img alt="main release" src={img} />
      </figure>
      <section className={classes.mainReleaseContent}>
        <div>
          <div>
            <h3 className={classes.mainReleaseTitle}>{title}</h3>
            <p>{author}</p>
          </div>
          <Icons.DotsVerticalFill />
        </div>
        <div className={classes.mainReleaseProgress} style={applyStyle("bg", { alpha: "0.26" })}>
          <span style={applyStyle("bg")} />
        </div>
        <div className={classes.mainReleaseTime}>
          <span>01:20</span>
          <span>03:40</span>
        </div>
      </section>
    </article>
  );
}

function CompactRelease({
  title,
  imgSrc,
  author,
}: {
  title: string;
  imgSrc: string;
  author: string;
}) {
  return (
    <article className={classes.compactRelease}>
      <figure className={classes.compactReleaseImg}>
        <img alt={title} src={imgSrc} />
      </figure>
      <div className={classes.compactReleaseContent}>
        <h4 className={classes.compactReleaseTitle}>{title}</h4>
        <p>{author}</p>
      </div>
      <div className={classes.compactReleaseActions}>
        <Icons.Play />
        <Icons.DotsVerticalFill />
      </div>
    </article>
  );
}
