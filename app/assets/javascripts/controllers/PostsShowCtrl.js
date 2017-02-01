BulletinBoard.controller('PostsShowCtrl', ['$scope', '$stateParams', 'postsService',
  function($scope, $stateParams, postsService) {
  
  var _setPost = function(post) {
    $scope.post = post;
  }

  postsService.getPost($stateParams.id).then(_setPost);

}])
