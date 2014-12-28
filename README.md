grunt_requirejs_test
====================

frontend module with grunt and requirejs

## Test Project for requirejs and grunt

### project init

     npm install

### develop mode
*   use requirejs to manage js modules
*   use less to manage css modules
*   start server: `grunt`

    
### product mode
*   package js with [grunt-contrib-requirejs](https://github.com/gruntjs/grunt-contrib-requirejs) 
*   compile less with [grunt-less](https://github.com/gruntjs/grunt-contrib-less)
*   compress css with [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
*   use [grunt-hashres](https://github.com/Luismahou/grunt-hashres) generate MD5 fingerprint for JS and CSS, and also update files link in releated HTML files. 
*  start server: `grunt release`

### add by ran
* just test
