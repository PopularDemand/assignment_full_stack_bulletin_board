BulletinBoard.factory('postsService', ['Restangular',
  function(Restangular) {

    var _posts = Restangular.all('posts').getList().$object;

    var getPosts = function() {
      return _posts
    }

    var _create = function(params) {
      return Restangular.all('posts').post(params)
        .then(function(post) {
          _posts.unshift(post)
        })
    }

    Restangular.extendCollection('posts', function(posts) {
      posts.create = _create;
      return posts;
    })

    return {
      getPosts: getPosts
    }
    
  }]
)
