const fakeUserData = {
	id: "001",
	email: "fake@user.com",
	firstName: "Peter",
	lastName: "Parker",
};

export const fetchUser = (email, password) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			try {
				resolve(fakeUserData);
			} catch (error) {
				reject(error);
			}
		}, 1000);
	});
