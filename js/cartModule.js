var cartModule = angular.module('cartModule', ['storeModule']);

    //Registering Cart Services
    cartModule.factory('CartService',function() {
        return CartSrvc = {
            counter : 0,
            cartAlbums : [],
            AddCart : function(album){
                CartSrvc.counter++;
                CartSrvc.cartAlbums.push(album);
            },
            RemoveCart : function(index){
                CartSrvc.cartAlbums.splice(index,1);
                CartSrvc.counter--;
            }
        }
    });

    cartModule.controller('cartCtrl', function($scope, CartService, StoreService)
    {
        //Using Cart Services
        $scope.cartService = CartService;
        //Using Store Services from Another Module
        $scope.albums = StoreService.allAlbums;
        //Total Cart Amount
        $scope.totalPrice = function(){
            var total = 0;
            var num = 1;
            for(var count=0; count < $scope.cartService.cartAlbums.length; count++){
                total += $scope.cartService.cartAlbums[count].price*num;
            }
            return total;
        };
    });