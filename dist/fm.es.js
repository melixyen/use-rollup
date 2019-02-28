/*
*   name: userollup 
*   description: A project of library create by rollup 
*   version: 0.0.1 
*   license: MIT 
*   
*   Edit by: Melix Yen
*   E-Mail: yourmail@abc.com
*     
*/
function square(x){
    return x * x;
}

var arrayMaxMin = {
    getMax: (ary)=>{
        return Math.max.apply(null, ary);
    },
    getMin: (ary)=>{
        return Math.min.apply(null, ary);
    },
    getMaxMin: (ary)=>{
        return [Math.max.apply(null, ary), Math.min.apply(null, ary)]
    }
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var umdfn = createCommonjsModule(function (module, exports) {
(function (global, factory) {
    module.exports = factory();
  }(commonjsGlobal, function () {
  var umdFn = function umdFn (options) {
	if ( options === void 0 ) options = {};
    this.app = null;
    this.low = function(str){
        console.log('this is low ' + str);
    };
  };

  umdFn.install = function(str){
      console.log('this is install ' + str);
  };

  umdFn.prototype.recatch = function(str){
      console.log('this is recatch ' + str);
  };
  

  return umdFn;
}));
});

function add(x,y){
	return x + y;
}
class main {
	constructor(x,y){
		this.square = square;
		this.getMax = arrayMaxMin.getMax;
		this.getMin = arrayMaxMin.getMin;
		this.getMaxMin = arrayMaxMin.getMaxMin;
		this.arrayMaxMin = arrayMaxMin;
		this.add = add;
		this.umdFn = umdfn;
		this.x = x;
		this.y = y;
		this.addBack = add(x,y);
		this.squareBack = square(x);
	}
	static add() {
		return add.apply(this, arguments);
	}
}

export default main;
