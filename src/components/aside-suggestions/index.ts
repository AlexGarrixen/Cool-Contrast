import dynamic from "next/dynamic";

import { AsideSkeleton } from "./skeleton";

export default dynamic(() => import("./aside-suggestions"), { ssr: false, loading: AsideSkeleton });
