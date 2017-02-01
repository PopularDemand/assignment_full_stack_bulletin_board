BulletinBoard.factory('commentsService', ['Restangular',
  function(Restangular) {

    var _comments = Restangular.all('comments').getList().$object;

    Restangular.extendModel('comments', function(model) {
      model.changeVote = _changeVote;
      return model;
    })

    var _changeVote = function(amount) {
      this.votes += amount
    }

    var getComments = function() {
      return _comments
    }

    return {
      getComments: getComments
    }

  }]
)
