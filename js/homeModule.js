var homeModule = angular.module('homeModule', ['ngRoute','storeModule','cartModule']);

    //routing
    homeModule.config(function ($routeProvider) {
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

	});

    //Registering Home Sevices
    homeModule.factory('HomeService', function(){
        return {
            //home page's current selected Album
            currentAlbum : null,
            sidebarURL : "partials/currentAlbum.html",
            setAlbum : function(album){
                this.currentAlbum = album;
            }
        }
    });

    homeModule.controller("homeCtrl", function ($scope, $location, StoreService, HomeService){
        var scope = $scope;

        scope.albums = StoreService.allAlbums;
        scope.homeService = HomeService;
        
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
    });