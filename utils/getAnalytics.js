import getConfig from "next/config";
const { publicRuntimeConfig: envars } = getConfig();
import * as prodlytics from "./analytics";
import * as devlytics from "./devlytics";

export default function getAnalytics() {
	return envars.nodeEnv === "production" ? prodlytics : devlytics;
}
