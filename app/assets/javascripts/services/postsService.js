BulletinBoard.factory('postsService', ['Restangular', 'commentsService',
  function(Restangular, commentsService) {

    var _posts = Restangular.all('posts').getList().$object;

    var getPosts = function() {
      return _posts
    }

    var getPost = function(id) {
      return Restangular.one('posts', id).get()
        .then(function(post){
          return _extendComments(post);
        });
    }

    var _create = function(params) {
      return Restangular.all('posts').post(params)
        .then(function(post) {
          _posts.unshift(post)
        })
    }

    var _extendComments = function(post) {
      post.comments.forEach(commentsService.extendComment);
      return post;
    }

    Restangular.extendCollection('posts', function(posts) {
      posts.create = _create;
      return posts;
    })

    return {
      getPosts: getPosts,
      getPost: getPost
    }
    
  }]
)
