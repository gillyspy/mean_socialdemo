// create a controller and inject our service
angular.module('app')
    .controller('PostCtrl',function($scope, PostsSvc){
    $scope.addPost = function(){
	if($scope.postBody){
	    PostsSvc.create({
		username : 'gillyspy',
		body : $scope.postBody
	    }).success( function(post) {
		$scope.posts.unshift(post);
		$scope.postBody = null;
	    }) // success
	} // endif;
    } // end addPost;

    // via API service
    PostsSvc.fetch()
	.success( function(posts){
	$scope.posts = posts;
    });

}); // end controller

