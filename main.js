var app = angular.module('Main', []);

app.controller('MainCtrl',[ '$scope', function($scope) {
   
    // This function sets the value of the input boxes to null.
    var clearAll = function(){
        $scope.valueOne = null;
        $scope.valueTwo = null;
    };
    
    // This is the function for when the '+' button is clicked.
    $scope.addition = function() {
        // I get the values from both input boxes, then assign them to variables.
        var a = $scope.valueOne;
        var b = $scope.valueTwo;
        // Here I add the two values and assign it to a variable.
        var c = a + b;
        // If either of the values is not a number it will tell them they need two numbers to add.
        if (a == null || b == null) {
           return $scope.message = 'You have to enter two numbers!';
        }
        // If both values are numbers it will perform the following code.
        else{
          $scope.message = 'The total of ' + a + ' plus ' + b + ' equals ' + c + '!';  
        }
        // This calls the function to clear the input fields after the button has been clicked.
        clearAll();
        // Logging a message to the console simply to let me know if its running properly.
        console.log('You know how to add!');
        
    };
    
    // This is the function for when the '-' button is clicked.
    $scope.subtraction = function() {
        var a = $scope.valueOne;
        var b = $scope.valueTwo;
        var c = a - b;
        if (a == null || b == null) {
           return $scope.message = 'You have to enter two numbers!';
        }
        else{
          $scope.message = 'The total of ' + a + ' minus ' + b + ' equals ' + c + '!';  
        }
        clearAll();
        console.log('You can subtract too!');
        
    };
    
    // This is the function for when the '*' button is clicked.
    $scope.multiplication = function() {
        var a = $scope.valueOne;
        var b = $scope.valueTwo;
        var c = a * b;
        if (a == null || b == null) {
           return $scope.message = 'You have to enter two numbers!';
        }
        else{
          $scope.message = 'The total of ' + a + ' multiplied by ' + b + ' equals ' + c + '!';  
        }
        clearAll();
        console.log('You can multiply?');
        
    };
    
    // This is the function for when the '/' button is clicked.
    $scope.division = function() {
        var a = $scope.valueOne;
        var b = $scope.valueTwo;
        var c = a / b;
        // This is added so that if the second number is a 0, it lets them know you can't divide by 0.
        if( b === 0){
           return $scope.message = 'You can\'t divide by 0!';
        }
        if (a == null || b == null) {
           return $scope.message = 'You have to enter two numbers!';
        }
        else{
          $scope.message = 'The total of ' + a + ' divided by ' + b + ' equals ' + c + '!';  
        }
        clearAll();
        console.log('Isn\'t division fun?!');
        
    };
     
}])