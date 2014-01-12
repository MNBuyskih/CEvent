Custom event mixin
==================

Allow add events in your own classes and functions.

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

Api
---
`CEvent.on` - attach event handler. Return event key. Use it for remove (CEvent.off()) method. `CEvent.on(eventName, callbackFunction)`.

`CEvent.trigger` - call event. `CEvent.trigger(eventName, callbackParamsArray)`.

`CEvent.off` - remove event. `CEvent.trigger(eventKey)`.