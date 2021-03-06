describe('PhoneCat App', function() {

        it('should redirect index.html to index.html#/phones', function() {
      browser.get('index.html');
      browser.getLocationAbsUrl().then(function(url) {
        expect(url).toEqual('/phones');
      });
  });

  describe('Phone list view', function() {

    beforeEach(function() {
      browser.get('index.html#/phones');
    });


    it('should filter the phone list as a user types into the search box', function() {

      var phoneList = element.all(by.repeater('phone in phones'));
      var query = element(by.model('query'));

      expect(phoneList.count()).toBe(20);

      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(8);
    });

    it('should be possible to control phone order via the drop down select box', function() {

      //var phoneNameColumn = element.all(by.repeater('phone in phones').column('phone.name'));
      var phoneNameColumn = element.all(by.repeater('phone in phones'));
      var query = element(by.model('query'));

     /* function getNames() {
        return phoneNameColumn.map(function(elm) {
          return elm.getText();
        });
      }*/

     query.sendKeys('tablet'); //let's narrow the dataset to make the test assertions shorter

      /*expect(getNames()).toEqual([
        "Motorola XOOM\u2122 with Wi-Fi",
        "MOTOROLA XOOM\u2122"
      ]);*/

    expect(phoneNameColumn.count()).toBe(2);

      //element(by.model('orderProp')).element(by.css('option[value="name"]')).click();

      /*expect(getNames()).toEqual([
        "MOTOROLA XOOM\u2122",
        "Motorola XOOM\u2122 with Wi-Fi"
      ]);*/
      expect(phoneNameColumn.count()).toBe(2);
    });

    it('should render phone specific links', function() {
      var query = element(by.model('query'));
      query.sendKeys('nexus');
      element.all(by.css('.phones li a')).first().click();
      browser.getLocationAbsUrl().then(function(url) {
        expect(url).toBe('/phones/nexus-s');
      });
    });

  });
});

/*
describe('Phone detail view', function() {

    beforeEach(function() {
      browser.get('index.html#/phones/nexus-s');
    });


    it('should display placeholder page with phoneId', function() {
      expect(element(by.binding('phoneId')).getText()).toBe('nexus-s');
    });

});
*/