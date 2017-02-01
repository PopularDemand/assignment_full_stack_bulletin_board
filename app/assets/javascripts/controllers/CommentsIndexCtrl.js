BulletinBoard.controller('CommentsIndexCtrl', ['$scope', 'commentsService',
  function($scope, commentsService) {

    $scope.comments = commentsService.getComments();
    
  }]
)
