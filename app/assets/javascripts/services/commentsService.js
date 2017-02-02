BulletinBoard.factory('commentsService', ['Restangular',
  function(Restangular) {

    var _comments = [];
    
    Restangular.all('comments').getList()
      .then(function(comments) {
        angular.copy(comments.map(extendComment), _comments);
        return _comments;
      });

    Restangular.extendModel('comments', function(model) {
      model.changeVote = _changeVote;
      return model;
    })

    var extendComment = function(comment) {
      // comment.changeVote = _changeVote
      Restangular.restangularizeElement(null, comment, 'comments', { id: comment.id })
      return comment;
    }

    var _changeVote = function(amount) {
      this.votes += amount
      this.save()
    }

    var getComments = function() {
      return _comments
    }

    var create = function(params) {
      Restangular.all('comments').post(params)
        .then(function(response) {
          _comments.unshift(response);
          return response;
        })

    }

    return {
      getComments: getComments,
      extendComment: extendComment,
      create: create
    }

  }]
)
