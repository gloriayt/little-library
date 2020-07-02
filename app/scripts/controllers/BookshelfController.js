angular.module('ReaderApp').controller('BookshelfController', ['$scope', 'books', function($scope, books) {
    books.success(function(data) {
        $scope.myBooks = data;
    });
}]);
  