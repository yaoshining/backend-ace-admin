'use strict';

describe('Service: header', function () {

  // load the service's module
  beforeEach(module('musicyaoBackendApp'));

  // instantiate service
  var header;
  beforeEach(inject(function (_header_) {
    header = _header_;
  }));

  it('should do something', function () {
    expect(!!header).toBe(true);
  });

});
