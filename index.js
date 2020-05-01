module.exports = async (req, res) => {
	res.setHeader(
		'access-control-allow-origin',
		process.env.ACCESS_ALLOW_ORIGIN || '*'
	);

	res.setHeader('content-type', 'text/plain');

	const xForwardedFor =
		req.headers['X-Forwarded-For'] || req.headers['x-forwarded-for'] || '';

	const ip = xForwardedFor.split(',')[0];

	if (!ip) {
		res.statusCode = 404;
		return res.end('Not found.');
	}

	res.end(ip);
};
