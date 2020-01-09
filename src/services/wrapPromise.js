export default function wrapPromise(promise) {
	let status = "PENDING";
	let result;

	const suspender = promise.then(
		(r) => {
			status = "SUCCESS";
			result = r;
		},
		(err) => {
			status = "ERROR";
			result = err;
		}
	);

	return {
		read() {
			switch (status) {
				case "PENDING":
					throw suspender;
				case "ERROR":
					throw result;
				case "SUCCESS":
					return result;
			}
		}
	};
}
