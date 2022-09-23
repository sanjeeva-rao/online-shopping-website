/*when we click home icon then we will visible all all the available shopping items
for each item view button is there.if we click view then we see that item totally
if we click add to cart then that selected item will cart and howmany cart items are there will be shown in right side
and if we click cart icon which is available on right side of the top then we see all the cart items
if we want to search any item then we search in searchbox which is available on top side
*/


app.controller("myCtrl",function($scope,$http){
    $scope.array=[];
    $scope.newarray=[];
    
    
    $http.get("product.json").then(function(responce){     
        $scope.data=responce.data.products;
        $scope.display=function(){
            $scope.cond=true;
            $scope.cond2=false;
            $scope.cond3=false;
        }
        //when we click view button then the below function will occurs
        $scope.view=function(x){
            $scope.cond2=true;
            $scope.cond=false;
            $scope.cond3=false;
            $scope.index=x;
            $scope.title=$scope.data[x].title;
            $scope.image=$scope.data[x].images.large.url;
            $scope.id=$scope.data[x]._id.$oid;
            $scope.cost=$scope.data[x].price;
            $scope.brand=$scope.data[x].brand;
            $scope.model=$scope.data[x].model;
            $scope.feature1=$scope.data[x].feature[0];
            $scope.feature2=$scope.data[x].feature[1];
           

        }
        //when we click "add to cart" then this function will call
        $scope.cart=function(x){
           
            $scope.array.push({
            title:$scope.data[x].title,
            image:$scope.data[x].images.large.url,
            id:$scope.data[x]._id.$oid,
            cost:$scope.data[x].price,
            brand:$scope.data[x].brand,
            model:$scope.data[x].model,
            feature1:$scope.data[x].feature[0],
            feature2:$scope.data[x].feature[1],
            
            })
            $scope.newarray=$scope.array;
            $scope.cartlength=$scope.newarray.length;
            
            
        }

        // when we click "cart icon" the the below fuction call 
        $scope.cart2=function(x){
            $scope.cond2=false;
            $scope.cond=false;
            $scope.cond3=true;
            

           
           
            
            

        }

    });
    $scope.searchInput="";

})