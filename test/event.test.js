test('Custom Event', function () {
    ok(CEvent instanceof Object);
});

test('Event On', function () {
    ok(CEvent.on instanceof Function);
    ok(CEvent.on('name', function () {
        return 'testReturn';
    }) == 'name_0');
    ok(CEvent.__events['name'].length > 0);
});

test('Event Trigger', function () {
    ok(CEvent.trigger instanceof Function);
    CEvent.on('name', function () {
        return 'testReturn';
    });
    ok(CEvent.trigger('name') == 'testReturn');
});

test('Event Off', function () {
    CEvent.on('name', function () {
    });

    ok(CEvent.off instanceof Function);
    ok(CEvent.off('name_0') == 0);
});

test('Event Mixin', function () {
    ok(CEvent.mixin instanceof Function);

    var t = function () {
    };
    CEvent.mixin(t);
    var _t = new t();
    ok(_t.on instanceof Function);
    ok(_t.trigger instanceof Function);
    ok(_t.off instanceof Function);
    ok(!(_t.mixin instanceof Function));
});