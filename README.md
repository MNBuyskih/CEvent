Custom event mixin
==================

Allows for events in their own classes and methods.

Usage
-----
    // Define your class
    var MyClass = function(){};
    
    // Atach custom events mixin
    CEvent.mixin(MyClass);
    
    // Other properties
    MyClass.prototype = {
    
        myProperty: 'foo',
        
        myFunction: function(){
            // Call trigger method
            this.trigger('log', [this]);
            
            console.log(this.myProperty);
        },
    };
    
    // Use our your class
    var myVar = new MyClass();
    // Atach event handler
    myVar.on('log', function(_myVar){
        alert('Called before logging');
    });
    myVar.myFunction();