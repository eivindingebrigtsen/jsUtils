if(!$){var $={}}$.test=false;$.console={assert:function(){($.test===true?console.assert(arguments[0],(arguments[1]?arguments[1]:""),(arguments[2]?arguments[2]:"")):$.dud())},warn:function(){($.test===true?console.warn(arguments[0],(arguments[1]?arguments[1]:""),(arguments[2]?arguments[2]:"")):$.dud())},error:function(){($.test===true?console.error(arguments[0],(arguments[1]?arguments[1]:""),(arguments[2]?arguments[2]:"")):$.dud())},log:function(){($.test===true?console.log(arguments[0],(arguments[1]?arguments[1]:""),(arguments[2]?arguments[2]:"")):$.dud())},info:function(){($.test===true?console.info(arguments[0],(arguments[1]?arguments[1]:""),(arguments[2]?arguments[2]:"")):$.dud())},dir:function(){($.test===true?console.dir(arguments[0],(arguments[1]?arguments[1]:""),(arguments[2]?arguments[2]:"")):$.dud())},trace:function(){($.test===true?console.trace(arguments[0],(arguments[1]?arguments[1]:""),(arguments[2]?arguments[2]:"")):$.dud())},time:function(){($.test===true?console.time(arguments[0]):$.dud())},timeEnd:function(){($.test===true?console.timeEnd(arguments[0]):$.dud())},profile:function(){($.test===true?console.profile(arguments[0]):$.dud())},profileEnd:function(){($.test===true?console.profileEnd(arguments[0]):$.dud())}};$.dud=function(){return false};