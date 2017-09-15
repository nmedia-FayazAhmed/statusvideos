angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicPopup) {
  
})

.controller('searchCtrl', function($scope, VEDIOSMODAL) {

  VEDIOSMODAL.getAllvideos()

          .then(function(resp){
                console.log(resp.data.items);
          },
            function(error){
              
              console.log(error);
          }
        );
  $scope.myalert = function() {
      alert("working");
  };
  // document.getElementById('myframe').onload = function() {
  //     // alert('myframe is loaded');
  //     document.getElementById("red").style.display = 'none';
  //     document.getElementsByClassName("ytp-youtube-button")[0].style.display = 'none';
  //   };
  //     // alert('myframe is loaded');

})

// .controller('PlaylistCtrl', function($scope, $stateParams) {
// });

.controller('show',function($scope,$ionicModal){
$ionicModal.fromTemplateUrl('js/display.html', {
      scope: $scope,
      animation: 'slide-in-up'
   }).then(function(modal) {
      $scope.modal = modal;
   });
  
   $scope.openModal = function() {
      $scope.modal.show();
   };
  
   $scope.closeModal = function() {
      $scope.modal.hide();
   };
})
   //create peprove
   .controller('hide',function($scope,$ionicPopover){
   $ionicPopover.fromTemplateUrl('js/poprove.html', {
      scope: $scope
   }).then(function(popover) {
      $scope.popover = popover;
   });

   $scope.openPopover = function($event) {
      $scope.popover.show($event);
   };

   $scope.closePopover = function() {
      $scope.popover.hide();
   };
  
})
// .controller('show',function($scope){
// 	$scope.display=function(){
// 		return {
//       templateUrl: 'display.html'
//     };

// 	}
// })
