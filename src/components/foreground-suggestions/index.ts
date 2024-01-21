import dynamic from "next/dynamic";

import { Skeleton } from "./foreground-suggestions";

export default dynamic(() => import("./foreground-suggestions").then((m) => m.default), {
  ssr: false,
  loading: Skeleton,
});
