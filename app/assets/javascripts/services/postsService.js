BulletinBoard.factory('postsService', ['Restangular',
  function(Restangular) {

    var _posts = Restangular.all('posts').getList().$object;

    var getPosts = function() {
      return _posts
    }

    return {
      getPosts: getPosts
    }
    
  }]
)
