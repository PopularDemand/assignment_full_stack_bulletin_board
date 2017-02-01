var BulletinBoard = angular.module('BulletinBoard', ['ui.router', 'restangular'])

BulletinBoard.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/posts')

    $stateProvider
      .state('main', {
          url: '/',
          abstract: true,
          views: {
            'main-content@': {
              template: '<div ui-view></div>'
            },
            'recent-comments': {
              templateUrl: '/templates/comments/index.html',
              controller: 'CommentsIndexCtrl'
            }
          }
      })
      .state('posts', {
        parent: 'main',
        url: 'posts',
        views: {
          '': {
            templateUrl: '/templates/posts/index.html',
            controller: 'PostsIndexCtrl'
          }
        }
      })
      .state('post', {
        parent: 'main',
        url: 'posts/:id',
        templateUrl: '/templates/posts/show.html',
        controller: 'PostsShowCtrl'
      })
  }]
)

BulletinBoard.config(['RestangularProvider', function(RestangularProvider) {
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}]);

BulletinBoard.factory('_', ['$window', function($window) {
  return $window._
}])

BulletinBoard.config(
  ["$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
  }]);
