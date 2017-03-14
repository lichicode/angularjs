define([],function () {
  "use strict";
  var factory = function ($http,$q) {
    function getFirstClass(){
      var firstClass = [
        {id:1,name:"A1"},
        {id:2,name:"A2"},
        {id:3,name:"A3"},
        {id:4,name:"A4"},
        {id:5,name:"A5"}
      ];
      return firstClass;
    }
    function getSecondClass (firstClassName){
      var secondClass = [
        {id:1,name:firstClassName+"-B1"},
        {id:2,name:firstClassName+"-B2"},
        {id:3,name:firstClassName+"-B3"},
        {id:4,name:firstClassName+"-B4"},
        {id:5,name:firstClassName+"-B5"}
      ];
      return secondClass;
    }
    function getThirdClass (secondClassName){
      var thirdClass = [
        {id:1,name:secondClassName+"-C1"},
        {id:2,name:secondClassName+"-C2"},
        {id:3,name:secondClassName+"-C3"},
        {id:4,name:secondClassName+"-C4"},
        {id:5,name:secondClassName+"-C5"}
      ];
      return thirdClass
    }
    return {
      getFirstClass:getFirstClass,
      getSecondClass:getSecondClass,
      getThirdClass:getThirdClass
    };
  };
  factory.$inject = ['$http','$q'];
  return factory;
});
