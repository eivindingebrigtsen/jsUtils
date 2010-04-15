(function(){
  var __ = {
      something: function(a,b,c,d,e){
        console.group('something');
        console.time('something');
        var Things = [1,3,4,5,6,77,8,99,9,1];
        var other = [];
        for (var i = Things.length - 1; i >= 0; i--){
          console.log(Things[i]);
          other.push({i: Things[i]});
        }
        console.timeEnd('something');
        console.groupEnd('something');
        return other;
      }
  };
  __.something();
});