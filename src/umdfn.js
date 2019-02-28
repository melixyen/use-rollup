(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.umdFn = factory());
  }(this, function () { 'use strict';

  var umdFn = function umdFn (options) {
	if ( options === void 0 ) options = {};
    this.app = null;
    this.low = function(str){
        console.log('this is low ' + str);
    }
  }

  umdFn.install = function(str){
      console.log('this is install ' + str);
  }

  umdFn.prototype.recatch = function(str){
      console.log('this is recatch ' + str);
  }
  

  return umdFn;
}));