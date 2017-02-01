BulletinBoard.directive('comment', function() {
  return {
    restrict: 'AE',
    templateUrl: '/directives/comment.html',
    scope: {
      'comment': '='
    },
    link: function(scope) {

    }
  }
})