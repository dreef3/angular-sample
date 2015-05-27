function Ctrl($scope, Service) {
    // Observe changes
    $scope.$watch('name', function (val) {
        $scope.details = Service.lookup(val);
    });
}
