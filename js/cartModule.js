angular.module('cartModule', [])

    .run(function($rootScope) {
        //Add to Cart Logic
        $rootScope.counter = 0;
        $rootScope.addCart = function(album) {
            $rootScope.counter++;
            $rootScope.albums.push(album);
            $rootScope.album = {};
        };
    })

    .controller('cartCtrl', function($scope)
    {

        //Cart Page
//        $scope.items = [
//            {Name: "Soap", Price: "25", Quantity: "10"},
//            {Name: "Shaving cream", Price: "50", Quantity: "15"},
//            {Name: "Shampoo", Price: "100", Quantity: "5"}
//        ];

//        $scope.addAlbum = function(album) {
//            $scope.albums.push(album);
//            $scope.album = {};
//        };

//        $scope.removeItem = function(index){
//            $scope.albums.splice(index,1);
//        };

//        $scope.totalPrice = function(){
//            var total = 0;
//            for(count=0;count<$scope.items.length;count++){
//                total += $scope.albums[count].price*$scope.albums[count].Quantity;
//            }
//            return total;
//        };
//
//
    });