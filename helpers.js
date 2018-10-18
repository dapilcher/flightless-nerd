const moment = require("moment");

exports.toRelativeTime = timestamp => {
	const splitDate = timestamp.split("T")[0];
	const relativeTime = moment(splitDate, "YYYY-MM-DD").fromNow();
	return relativeTime;
};

exports.theme = {
	red: '#EB3E34',
	darkred: '#D2251B',
	blue: '#586CFF',
	darkblue: '#2539CC',
	yellow: '#FFE838',
	darkyellow: '#E6CF1F',
};
