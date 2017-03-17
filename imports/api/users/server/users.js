//users is a default collection in Meteor. No need to declare it

Accounts.onCreateUser((options, user) => {
	user.firstName = options.firstName || "non défini";
	user.lastName = options.lastName || "non défini"
	user.type = options.type;
	user.photo = options.photo;
	user.location = options.locations;
	user.lng = options.lng;
	user.tel = options.tel;
	user.port = options.port;
	user.status=options.status;
	user.fonction=options.fonction;
	user.location=options.location
	// Don't forget to return the new user object at the end!
	return user;
});
	


