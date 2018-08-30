const moment = require("moment");

exports.toRelativeTime = timestamp => {
	const splitDate = timestamp.split("T")[0];
	const relativeTime = moment(splitDate, "YYYY-MM-DD").fromNow();
	return relativeTime;
};
