export default function getSearchParams() {
	let params: { [key: string]: any } = {};

	new URL(window.location.href).searchParams.forEach(function (
		val: string,
		key: string
	) {
		if (params[key] !== undefined) {
			if (!Array.isArray(params[key])) {
				params[key] = [params[key]];
			}
			params[key].push(val);
		} else {
			params[key] = val;
		}
	});

	return params;
}
