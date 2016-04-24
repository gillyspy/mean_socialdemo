
// ng service for loading posts
angular.module('app')
    .service('PostsSvc', function($http){

    // add a fetch method to our service
    this.fetch = function(){
	return $http.get('/api/posts');
    } // fetch;
    
    // add a create method to our service
    this.create = function(post){
	return $http.post('/api/posts',post);
    } //create;
});// service()


