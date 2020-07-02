app.controller('BookshelfController', ['$scope', 'books', function($scope, books) {
    books.success(data => {
        $scope.myBooks = data;
    });
}]);
  