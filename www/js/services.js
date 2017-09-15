angular.module('starter.services', [])


.factory('VEDIOSMODAL', function($http) {
	var playlistUrl = "https://www.googleapis.com/youtube/v3/playlistItems";
	
	return {


		getAllvideos: function() {    
			var data = {
				part : 'snippet',
				playlistId : 'PLzlKYeIuSgzFcVRrYRANV3UZBqWMV6jJq',
				maxResults: '50',
				key : "AIzaSyCRog4ALqgDZNqQM0yYmL5gmOTuajAlM4I",
			};

			return $http({
		        url: playlistUrl,
		        method: "GET",
		        params: data
		    })
    	},

		getFunnyvideos: function() {      
			var data = {
				part : 'snippet',
				playlistId : 'PL7iyw6tCLfOSOW54ImstCb1w_oBMpj2Ar',
				maxResults: '24',
				key : "AIzaSyByyqN1TwGwEWSNnQLlaVgw8esIKMJrnfo",
			};

			return $http({
		        url: playlistUrl,
		        method: "GET",
		        params: data
		    })
    	},

    	getRomenticvideos: function() {      
			var data = {
				part : 'snippet',
				playlistId : 'PL7iyw6tCLfOSOW54ImstCb1w_oBMpj2Ar',
				maxResults: '24',
				key : "AIzaSyByyqN1TwGwEWSNnQLlaVgw8esIKMJrnfo",
			};

			return $http({
		        url: playlistUrl,
		        method: "GET",
		        params: data
		    })
    	},

    	getKhanvideos: function() {      
			var data = {
				part : 'snippet',
				playlistId : 'PL7iyw6tCLfOSOW54ImstCb1w_oBMpj2Ar',
				maxResults: '24',
				key : "AIzaSyByyqN1TwGwEWSNnQLlaVgw8esIKMJrnfo",
			};

			return $http({
		        url: playlistUrl,
		        method: "GET",
		        params: data
		    })
    	},

    	getPotryvideos: function() {      
			var data = {
				part : 'snippet',
				playlistId : 'PL7iyw6tCLfOSOW54ImstCb1w_oBMpj2Ar',
				maxResults: '24',
				key : "AIzaSyByyqN1TwGwEWSNnQLlaVgw8esIKMJrnfo",
			};

			return $http({
		        url: playlistUrl,
		        method: "GET",
		        params: data
		    })
    	},
	}
});