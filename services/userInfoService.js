const GITHUB_API = "https://api.github.com";

export const wrapPromise = (promise) => {
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
};

export const fetchUserDetail = async (username) => {
	const res = await fetch(`${GITHUB_API}/users/${username}`);
	return res.json();
};

export const fetchUserRepos = async (username, limit, page) => {
	const res = await fetch(`${GITHUB_API}/users/${username}/repos?page=${page}&per_page=${limit}`);
	return res.json();
};

export default function fetchUserInfo(username, limit, page = 1) {
	const detail = fetchUserDetail(username);
	const repos = fetchUserRepos(username, limit, page);
	return {
		detail: wrapPromise(detail),
		repos: wrapPromise(repos)
	};
}
