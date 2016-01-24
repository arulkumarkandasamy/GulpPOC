describe('PhoneCat controllers', function() {

	describe('PhoneListController', function(){
		var scope, $httpBackend;

		beforeEach(module('gulpPhonecatApp'));

		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
	      	$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('phones/phones.json').
	    	respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

			scope = $rootScope.$new();

	      	ctrl = $controller('PhoneListController', {$scope:scope});
	    }));

		/*it('should create "phones" model with 3 phones', function() {	   
		    expect(scope.phones.length).toBe(3);
		});*/

		it('should set the default value of orderProp model', function() {
	      	expect(scope.orderProp).toBe('age');
	    });

	    it('should create "phones" model with 2 phones fetched from xhr', function() {
		    expect(scope.phones).toBeUndefined();
		    $httpBackend.flush();

		    expect(scope.phones).toEqual([{name: 'Nexus S'},
                               {name: 'Motorola DROID'}]);
		});

	});

describe('PhoneDetailController', function(){
    var scope, $httpBackend, ctrl;
	beforeEach(module('gulpPhonecatApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/xyz.json').respond({name:'phone xyz'});

      $routeParams.phoneId = 'xyz';
      scope = $rootScope.$new();
      ctrl = $controller('PhoneDetailController', {$scope: scope});
    }));


    it('should fetch phone detail', function() {
      expect(scope.phone).toBeUndefined();
      $httpBackend.flush();

      expect(scope.phone).toEqual({name:'phone xyz'});
    });
  });
});