BulletinBoard.controller('PostsIndexCtrl', ['$scope', 'postsService',
  function($scope, postsService) {
    
    $scope.posts = postsService.getPosts();

    $scope.createPost = function() {
      $scope.posts.create($scope.newPost)
        .then(_clearForm, _showErrors);
    }

    var _clearForm = function() {
      $scope.errors = null;
      $scope.newPost = {};
      $scope.createPostForm.$setPristine()
    }

    var _showErrors = function(response) {
      $scope.errors = response.data.errors;
    }
  }]
)
