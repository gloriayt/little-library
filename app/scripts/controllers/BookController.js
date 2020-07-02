app.controller('BookController', ['$scope', '$routeParams', 'books', function($scope, $routeParams, books) {
    books.success(data => {
        $scope.book = data[$routeParams.bookId];
    });
    $scope.currentBookIndex = parseInt($routeParams.bookId);
}]);
  