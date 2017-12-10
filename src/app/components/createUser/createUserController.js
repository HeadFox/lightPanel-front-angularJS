import angular from 'angular';
// import * as R from 'ramda';
import './createUser.scss';
import '../../services/callToApi'; //eslint-disable-line

const lightPanel = angular.module('lightPanel');

lightPanel.controller('createUserController', ['$scope', 'callToApi', '$mdDialog', ($scope, callToApi, $mdDialog) => {
  $scope.createUser = (user) => {
    callToApi.addUser(user.lastname, user.firstname, user.username)
      .then(() => {
        $scope.$emit('listVhosts');
        $mdDialog.hide();
      });
  };
}]);
