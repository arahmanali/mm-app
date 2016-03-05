var storeModule = angular.module('storeModule', []);

    //Registering Store Services
    storeModule.factory('StoreService',function() {
        return {
            allAlbums : [
                {
                    albumID:"001",
                    title:"Konkrete",
                    artist:"Akon",
                    year:"2012",
                    genre:"Hip-Hop",
                    price: 1.89
                },
                {
                    "albumID":"002",
                    "title":"Recovery",
                    "artist":"Eminem",
                    "year":"2010",
                    "genre":"Hip-Hop",
                    "price": 2.10
                },
                {
                    "albumID":"003",
                    "title":"Euphoria",
                    "artist":"Enrique Iglesias",
                    "year":"2010",
                    "genre":"Pop",
                    "price": 1.54
                },
                {
                    "albumID":"004",
                    "title":"Shock Value",
                    "artist":"Timbaland",
                    "year":"2007",
                    "genre":"Rap",
                    "price": 2.30
                },
                {
                    "albumID":"005",
                    "title":"The Lost Tape",
                    "artist":"50 Cent",
                    "year":"2012",
                    "genre":"Other",
                    "price": 1.45
                },
                {
                    "albumID":"006",
                    "title":"That's My Name",
                    "artist":"Akcent",
                    "year":"2010",
                    "genre":"Pop",
                    "price": 2.00
                },
                {
                    "albumID":"007",
                    "title":"My Passion",
                    "artist":"Akcent",
                    "year":"2011",
                    "genre":"Pop",
                    "price": 1.95
                },
                {
                    "albumID":"008",
                    "title":"The Marshall Mathers LP 2",
                    "artist":"Eminem",
                    "year":"2013",
                    "genre":"Rap",
                    "price": 2.00
                },
                {
                    "albumID":"009",
                    "title":"The Marshall Mathers LP",
                    "artist":"Eminem",
                    "year":"2000",
                    "genre":"Rap",
                    "price": 1.50
                },
                {
                    "albumID":"010",
                    "title":"Escape",
                    "artist":"Enrique Iglesias",
                    "year":"2001",
                    "genre":"Pop",
                    "price": 1.25
                },
                {
                    "albumID":"011",
                    "title":"Quizas",
                    "artist":"Enrique Iglesias",
                    "year":"2002",
                    "genre":"Pop",
                    "price": 1.30
                },
                {
                    "albumID":"012",
                    "title":"Insomniac",
                    "artist":"Enrique Iglesias",
                    "year":"2007",
                    "genre":"Pop",
                    "price": 1.60
                },
                {
                    "albumID":"013",
                    "title":"Relapse",
                    "artist":"Eminem",
                    "year":"2009",
                    "genre":"Rap",
                    "price": 1.65
                },
                {
                    "albumID":"014",
                    "title":"Encore",
                    "artist":"Eminem",
                    "year":"2004",
                    "genre":"Rap",
                    "price": 1.65
                },
                {
                    "albumID":"015",
                    "title":"8 Mile",
                    "artist":"Eminem",
                    "year":"2002",
                    "genre":"Rap",
                    "price": 1.45
                },
                {
                    "albumID":"016",
                    "title":"Infinite",
                    "artist":"Eminem",
                    "year":"1996",
                    "genre":"Rap",
                    "price": 1.15
                },
                {
                    "albumID":"017",
                    "title":"Neon",
                    "artist":"Jay Sean",
                    "year":"2013",
                    "genre":"R&B",
                    "price": 2.00
                },
                {
                    "albumID":"018",
                    "title":"All or Nothing",
                    "artist":"Jay Sean",
                    "year":"2009",
                    "genre":"R&B",
                    "price": 1.95
                },
                {
                    "albumID":"019",
                    "title":"My Own Way",
                    "artist":"Jay Sean",
                    "year":"2009",
                    "genre":"R&B",
                    "price": 1.90
                },
                {
                    "albumID":"020",
                    "title":"Me Against Myself",
                    "artist":"Jay Sean",
                    "year":"2004",
                    "genre":"R&B",
                    "price": 1.50
                }]
        }
    });

    storeModule.controller('storeCtrl', function ($scope, StoreService) {

        //Using store services
        $scope.albums = StoreService.allAlbums;

        //Query Logic
        $scope.query = {};
        $scope.queryBy = '$';
    });