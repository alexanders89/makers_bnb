"use strict";

describe('Space', function() {
  var space;

  beforeEach(function(){
    space = new Space();
  });

  it('knows its name', function() {
    expect(space.name).toEqual("My new space");
  });

});
