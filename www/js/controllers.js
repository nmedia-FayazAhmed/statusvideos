angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicPopup) {
  
})

.controller('searchCtrl', function($scope) {
  document.getElementById('myframe').onload = function() {
      // alert('myframe is loaded');
      document.getElementById("red").style.display = 'none';
      document.getElementsByClassName("ytp-youtube-button")[0].style.display = 'none';
    };
      // alert('myframe is loaded');

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
