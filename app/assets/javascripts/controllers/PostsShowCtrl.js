BulletinBoard.controller('PostsShowCtrl', ['$scope', '$stateParams', 'postsService',
  function($scope, $stateParams, postsService) {
  
  var _setPost = function(post) {
    $scope.post = post;
    console.log(post)
  }

  postsService.getPost($stateParams.id).then(_setPost);

  var createComment = function() {
    $scope.post.createComment($scope.newComment)
      .then(_clearForm, _setErrors);
  }

  var _clearForm = function() {
    $scope.newComment = {};
    $scope.newCommentForm.$setPristine();
    $scope.errors = null;
  }

  var _setErrors = function(response) {
    $scope.errors = response.data.errors;
  }

}])
