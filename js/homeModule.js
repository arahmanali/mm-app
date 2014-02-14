angular.module('homeModule', ['ngRoute','storeModule','cartModule'])

    //routing
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', 
				{
                    templateUrl: 'partials/home.html',
                    controller: 'homeCtrl'
				})
			.when('/store', 
				{
					templateUrl: 'partials/store.html',
					controller: 'storeCtrl'
				})
			.when('/cart', 
				{
                    templateUrl: 'partials/cart.html'
				})
            .otherwise(
            {
                templateUrl: 'partials/warning.html'
            })

	})

	.controller("homeCtrl", function ($scope, $location){
        var scope = $scope;

        //home page's current selected Album
        scope.currentAlbum = null;
        scope.sidebarURL = "partials/currentAlbum.html";
        scope.setAlbum = function(id){
            scope.currentAlbum = scope.albums[id];
        };

        //Warning page's path definition
        scope.$watch('locationPath', function(path) {
        $location.path(path);
        });
        scope.$watch(function() {
            return $location.path();
        },
            function(path) {
            scope.locationPath = path;
        });


        //Global variables
        scope.tableHeads = {
            albumID : "Album ID",
            title : "Album Title",
            artist : "Artist",
            year : "Year",
            genre : "Genre",
            price : "Price"
        };

        //albums object
        scope.albums = {
            '001':{
                "albumID":"001",
                "title":"Konkrete",
                "artist":"Akon",
                "year":"2012",
                "genre":"Hip-Hop",
                "price":"1.89"
            },
            '002':{
                "albumID":"002",
                "title":"Recovery",
                "artist":"Eminem",
                "year":"2010",
                "genre":"Hip-Hop",
                "price":"2.10"
            },
            '003':{
                "albumID":"003",
                "title":"Euphoria",
                "artist":"Enrique",
                "year":"2010",
                "genre":"Pop",
                "price":"1.54"
            },
            '004':{
                "albumID":"004",
                "title":"Shock Value",
                "artist":"Timbaland",
                "year":"2007",
                "genre":"Rap",
                "price":"2.30"
            },
            '005':{
                "albumID":"005",
                "title":"The Lost Tape",
                "artist":"50 Cent",
                "year":"2012",
                "genre":"Other",
                "price":"1.45"
            }
        };
    });