require('babel/register')
var Main = require('./index.js')
var NonUniversalMain = require('./index-not-universal.js')

Main()
NonUniversalMain()
