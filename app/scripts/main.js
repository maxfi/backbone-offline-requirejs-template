require.config({
  paths: {
    'jquery': 'vendor/jquery/jquery',
    'jquery.mockjax':'vendor/jquery/jquery.mockjax',
    'underscore': 'vendor/underscore-amd/underscore',
    'backbone': 'vendor/backbone-amd/backbone',
    'backbone.offline': 'vendor/backbone.offline/index'
  },
  shim: {
  	'backbone.offline': {
  		deps: ['underscore', 'backbone'],
  		exports: 'Offline'
  },
  'jquery.mockjax':['jquery']
}
});

// require(['views/app'], function(AppView) {
//   new AppView;
// });

require(['collections/users','models/user','mocks'], function(Users, User, Mocks){
	Mocks.initialize();
  
  AppUsers = new Users();
	//debugger;
	AppUsers.fetch();
	// var user1 = new User({name: "Max", age: "28"});
	// AppUsers.add(user1);
	// user1.save();
});