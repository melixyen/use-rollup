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
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.arrayMath = factory());
}(this, function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function square(x) {
    return x * x;
  }

  var arrayMaxMin = {
    getMax: function getMax(ary) {
      return Math.max.apply(null, ary);
    },
    getMin: function getMin(ary) {
      return Math.min.apply(null, ary);
    },
    getMaxMin: function getMaxMin(ary) {
      return [Math.max.apply(null, ary), Math.min.apply(null, ary)];
    }
  };

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var umdfn = createCommonjsModule(function (module, exports) {
    (function (global, factory) {
      module.exports = factory();
    })(commonjsGlobal, function () {

      var umdFn = function umdFn(options) {
        if (options === void 0) options = {};
        this.app = null;

        this.low = function (str) {
          console.log('this is low ' + str);
        };
      };

      umdFn.install = function (str) {
        console.log('this is install ' + str);
      };

      umdFn.prototype.recatch = function (str) {
        console.log('this is recatch ' + str);
      };

      return umdFn;
    });
  });

  function _add(x, y) {
    return x + y;
  }

  var _default =
  /*#__PURE__*/
  function () {
    function _default(x, y) {
      _classCallCheck(this, _default);

      this.square = square;
      this.getMax = arrayMaxMin.getMax;
      this.getMin = arrayMaxMin.getMin;
      this.getMaxMin = arrayMaxMin.getMaxMin;
      this.arrayMaxMin = arrayMaxMin;
      this.add = _add;
      this.umdFn = umdfn;
      this.x = x;
      this.y = y;
      this.addBack = _add(x, y);
      this.squareBack = square(x);
    }

    _createClass(_default, null, [{
      key: "add",
      value: function add() {
        return _add.apply(this, arguments);
      }
    }]);

    return _default;
  }();

  return _default;

}));
