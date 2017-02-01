BulletinBoard.controller('PostsShowCtrl', ['$scope', '$stateParams', 'postsService',
  function($scope, $stateParams, postsService) {
  
  $scope.post = postsService.getPost($stateParams.id);

}])
