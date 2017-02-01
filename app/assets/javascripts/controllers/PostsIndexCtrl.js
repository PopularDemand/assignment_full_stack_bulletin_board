BulletinBoard.controller('PostsIndexCtrl', ['$scope', 'postsService',
  function($scope, postsService) {
    $scope.posts = postsService.getPosts()
  }]
)
