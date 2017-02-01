BulletinBoard.factory('commentsService', ['Restangular',
  function(Restangular) {

    var _comments = Restangular.all('comments').getList().$object;

    var getComments = function() {
      return _comments
    }

    return {
      getComments: getComments
    }

  }]
)
