if ( Meteor.users.find().count() === 0 ) {
	 Accounts.createUser({
		username: 'admin',
        email: 'admin@admin',
		createdAt: new Date(),
        password: 'admin',
		type: "admin",
		firstName : "admin",
		lastName : "admin"
	});
}


