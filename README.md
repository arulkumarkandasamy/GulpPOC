# Description
This project is generated using yeoman with AngularJs, Bootstrap, Yeoman, Gulp and Bower. This is part of POC project to evaluate Gulp and Grunt and find out which is better suited for AngularJS projects in EMA.
To complete the project set up run the commands given below in 'Generating bower and npm dependencies'.

# Creating Gulp build infrastructure using AngularJs, Bootstrap, Yeoman, Gulp and Bower

1. Create project folder and open command prompt
2. set path=%path%;C:\devtools\nodejs\home;
3. set PATH=%PATH%;C:\devtools\git\home\bin
4. set path=%path%;C:\Users\kandasamya\AppData\Roaming\npm
5. npm config set registry http://repository.emea.eu.int/content/groups/npm-group/ 
6. npm update -g npm
7. create .bowerrc in root folder and copy below code
	{
	"proxy":"http://proxy.eudra.org:8080",
	"https-proxy":"http://proxy.eudra.org:8080"
	}
8. npm install -g yo gulp gulp-cli bower
9. npm install -g generator-gulp-angular karma jasmine protractor bootstrap
10. yo gulp-angular
11. Answer as below to the interatcive commandline queries 

	? Which version of Angular do you want? 1.4.x (stable)
	? What Angular modules would you like to have? (ngRoute and ngResource will be addressed after)
	? Do you need jQuery or perhaps Zepto? jQuery 2.x (new version, lighter, IE9+)
	? Would you like to use a REST resource library? ngResource, the official support for RESTful servic
	? Would you like to use a router? ngRoute, the official router
	? Which UI framework do you want? Bootstrap, the most popular HTML, CSS, and JS framework
	? How do you want to implement your Bootstrap components? Angular UI Bootstrap, Bootstrap components
	? Which CSS preprocessor do you want? Sass (Node), Node.js binding to libsass, the C version of the
	? Which JS preprocessor do you want? (Use arrow keys)
	> None, I like to code in standard JavaScript.
	  ES6 (Babel formerly 6to5), ECMAScript 6 compiled with Babel which requires no runtime.
	  ES6 (Traceur), ECMAScript 6 compiled with the Traceur compiler from Google.
	  CoffeeScript, "a little language that compiles into JavaScript".
	  TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.
	  ? Which HTML template engine would you want? (Use arrow keys)
	> None, I like to code in standard HTML.
	  Jade (*.jade)
	  Haml (*.haml)
	  Handlebars (*.hbs)
	? Would you like to overwrite .bowerrc? No

12. Automatic tasks available in the project created with yeoman
	init/configure
	source code optimization (uglify, minify)
	unit test using Karma with PhantomJS
	
13. running gulp protractor

	npm install selenium-standalone@latest -g
	selenium-standalone install
	selenium-standalone start 
	gulp protractor
	
	Standalone selenium driver has built in drivers for firefox, chrome and ie
	
14. Using Chrome / Firefox with protractor

	In protractor.conf.js set the browser as below
	capabilities: {
    'browserName': 'firefox'
  }
  capabilities: {
    'browserName': 'chrome'
  }
	With firefox issues found due to below reason
	The version of Selenium Server does not know how to work with the newer version of Firefox. You need to download a newer version of the Selenium Server
	that supports the newer version of Firefox.

15. For further developing project add source files in below path
		js  - src\app\
		css - src\app\
		img - src\assets\images
		html (index.html) - src
		html (views) - src\app
	Unit test source files
		src\app - along with source file with name extended with.spec 
	Integration tests with protractor
		e2e folder in project root with js file name extended with .spec

		
# Setting up the project from the code base

## Setting up dependencies

	Dwonload and install node from below url
	https://nodejs.org/en/download/
	
	set nodejs and npm path like below
	C:\Users\ARUL KUMAR\AppData\Roaming\npm
	install git and set path

Run `npm install -g gulp gulp-cli bower`

Run `npm install`
Run `bower install`

## Generating bower and npm dependencies

	Run `bower install` and `npm install`

## Build & development

Run `gulp` for building and `gulp serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

