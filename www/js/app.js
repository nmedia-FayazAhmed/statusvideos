// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    // controller: 'AppCtrl',
    controller: 'hide'
  })

  

  .state('app.carton', {
      url: '/carton',
      views: {
        'menuContent': {
          templateUrl: 'templates/carton.html',
           controller: 'show'
        }
      }
    })

  // .state('app.display', {
  //     url: '/display',
  //     views: {
  //       'menuContent': {
  //         templateUrl: 'templates/display.html'
  //       }
  //     }
  //   })
  .state('app.poetry', {
      url: '/poetry',
      views: {
        'menuContent': {
          templateUrl: 'templates/poetry.html'
        }
      }
    })
  .state('app.nfa-khan', {
      url: '/nfa-khan',
      views: {
        'menuContent': {
          templateUrl: 'templates/nfa-khan.html'
        }
      }
    })
  .state('app.funny', {
      url: '/funny',
      views: {
        'menuContent': {
          templateUrl: 'templates/funny.html'
        }
      }
    })
  .state('app.download', {
      url: '/download',
      views: {
        'menuContent': {
          templateUrl: 'templates/download.html'
        }
      }
    })
    .state('app.romantic', {
      url: '/romantic',
      views: {
        'menuContent': {
          templateUrl: 'templates/romantic.html',
          
        }
      }
    })
    .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller: "searchCtrl"
      }
    }
  })
    .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/search');
});
