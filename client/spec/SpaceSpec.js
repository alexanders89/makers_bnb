"use strict";

describe('Space', function() {
  var space;

  beforeEach(function(){
    space = new Space();
  });

  it('knows its name', function() {
    expect(space.name).toEqual('My new space');
  });

  it('is able to change name', function(){
    space.editName('My updated space name');
    expect(space.name).toEqual('My updated space name');
  });

  it('has a description', function(){
    expect(space.description).toEqual('Add details about your space here.');
  });

  it('is able to change description', function(){
    space.editDescription('My updated space description');
    expect(space.description).toEqual('My updated space description');
  });

});
