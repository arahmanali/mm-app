var cartModule = angular.module('cartModule', ['storeModule']);

    //Registering Cart Services
    cartModule.factory('CartService',function() {
        return {
            counter : 0,
            cartAlbums : [],
            AddCart : function(album){
                this.counter++;
                this.cartAlbums.push(album);
                this.cartAlbums.indexOf(album);
            },
            RemoveCart : function(index){
                this.counter--;
                this.cartAlbums.splice(index,1);
            }
        }
    });

    cartModule.controller('cartCtrl', function($scope, CartService, StoreService)
    {
        //Using Own Cart Services
        $scope.cartService = CartService;
        //Using Store Services from Another Module
        $scope.albums = StoreService.allAlbums;
        //Total of Cart Amount
        $scope.chargesTax = 0.5;
        $scope.totalPrice = function(){
            var total = 0;
            var num = 1;
            for(var count=0; count < $scope.cartService.cartAlbums.length; count++){
                total += $scope.cartService.cartAlbums[count].price*num;
            }
            return total;
        };
    });