BulletinBoard.controller('PostsShowCtrl', ['$scope', '$stateParams', '$rootScope', 'postsService',
  function($scope, $stateParams, $rootScope, postsService) {
  
  var _setPost = function(post) {
    $scope.post = post;
  }

  postsService.getPost($stateParams.id).then(_setPost);

  $scope.createComment = function() {
    $scope.post.createComment($scope.newComment)
      .then(_clearForm, _setErrors);
  }

  var _clearForm = function() {
    $scope.newComment = {};
    $scope.createCommentForm.$setPristine();
    $scope.errors = null;
  }

  var _setErrors = function(response) {
    $scope.errors = response.data.errors;
  }

}])
