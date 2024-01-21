import dynamic from "next/dynamic";

import { Skeleton } from "./background-suggestions";

export default dynamic(() => import("./background-suggestions").then((m) => m.default), {
  ssr: false,
  loading: Skeleton,
});
