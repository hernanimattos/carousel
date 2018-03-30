/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dev/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dev/app.js":
/*!********************!*\
  !*** ./dev/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Carousel = __webpack_require__(/*! ./assets/js/index.js */ \"./dev/assets/js/index.js\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZGV2L2FwcC5qcz9iYzQ5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENhcm91c2VsID0gcmVxdWlyZSgnLi9hc3NldHMvanMvaW5kZXguanMnKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev/app.js\n");

/***/ }),

/***/ "./dev/assets/js/index.js":
/*!********************************!*\
  !*** ./dev/assets/js/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const  utils  = require('./utils/index.js')\n\nclass Carousel {\n  constructor() {\n    this.dots = document.querySelectorAll(\".dots\");\n    this.wrapper = document.querySelectorAll(\".carousel-wrapper\")[0];\n    this.cellWidth = Array.from(document.querySelectorAll(\".cell-item\"));\n    this.trashItem = Array.from(document.querySelectorAll(\".value-trash\"));\n    this.dataValues = Array.from(document.querySelectorAll(\"[data-value]\"));\n    this.totalCash = document.getElementById(\"total-cash\");\n\n    this.getDotClicked();\n\tthis.getItemToRemove();\n\n  }\n\n  getDotClicked() {\n    const dots = Array.from(this.dots)\n    dots.map((d, i) => {\n      d.addEventListener(\"click\", e => {\n\t\tdots.map(i=> i.classList.remove('active'));\n\t\te.target.classList.add(\"active\");\n        this.moveSlide(i);\n      });\n    });\n  }\n  moveSlide(index) {\n    if (index === 0) {\n      this.wrapper.style.marginLeft = `${this.calculateWrapper() / 4}px`;\n    }\n    const total = this.calculateWrapper() * index - this.calculateWrapper() / 4;\n\n    this.wrapper.style.marginLeft = `-${total}px`;\n  }\n  calculateWrapper() {\n    const margins = this.cellWidth.map(p => {\n\n      const elem = window.getComputedStyle(p);\n\t  const marginArray = parseInt(elem.marginLeft.replace(\"px\", \"\"), 10) + parseInt(elem.marginRight.replace(\"px\", \"\"), 10);\n\n      return marginArray;\n    });\n\n    return parseInt(margins, 10) + parseInt(this.cellWidth[0].clientWidth, 10);\n  }\n  getItemToRemove() {\n    const item = this.trashItem.map(trash => {\n      trash.addEventListener(\"click\", (e)=> {\n\t\te.stopPropagation;\n\t\tlet parent = '';\n\n\t\tconsole.log(e.target.tagName)\n\t\tif(e.target.tagName == 'IMG'){\n\t\t\tparent = e.target.parentNode.parentNode;\n\t\t}else{\n\t\t\tparent = e.target.parentNode;\n\t\t}\n        const item = new Promise((resolve, reject) => {\n          const addClass = parent.classList.add(\"remove\");\n          setTimeout(() => {\n            resolve(addClass);\n\t\t  }, 500);\n        });\n\n        item.then(() => {\n\n\t\t\tparent.remove();\n\n        }).then(()=>{\n\n\t\t\tthis.setTotalValue();\n\t\t\tthis.calculateTotal();\n\n\t\t});\n      });\n    });\n  }\n  calculateTotal() {\n\n    let total = this.dataValues\n      .map(e => this.cleanValue(e.dataset.value))\n      .reduce((a, b) => {\n        return parseInt(a) + parseInt(b);\n      }, 0);\n\n\treturn total;\n\n  }\n  setTotalValue() {\n\n\tthis.dataValues = Array.from(document.querySelectorAll(\"[data-value]\"));\n\n\tif(this.calculateTotal() == 0){\n\n\t\tthis.totalCash.textContent = 'Você faliu';\n\t}else{\n\n\t\tthis.totalCash.textContent = `R$ ${this.formatReal(this.calculateTotal())}`;\n\t}\n  }\n  formatReal(int) {\n    let tmp = int + \"\";\n    tmp = tmp.replace(/([0-9]{2})$/g, \",$1\");\n    if (tmp.length > 6) tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, \".$1,$2\");\n\n    return tmp;\n  }\n  cleanValue(valueString) {\n    return valueString.replace(/[!@#$%^&*.,]/g, \"\");\n  }\n}\nnew Carousel();\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYvYXNzZXRzL2pzL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZGV2L2Fzc2V0cy9qcy9pbmRleC5qcz9lZTY5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0ICB1dGlscyAgPSByZXF1aXJlKCcuL3V0aWxzL2luZGV4LmpzJylcblxuY2xhc3MgQ2Fyb3VzZWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRvdHNcIik7XG4gICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJvdXNlbC13cmFwcGVyXCIpWzBdO1xuICAgIHRoaXMuY2VsbFdpZHRoID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNlbGwtaXRlbVwiKSk7XG4gICAgdGhpcy50cmFzaEl0ZW0gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudmFsdWUtdHJhc2hcIikpO1xuICAgIHRoaXMuZGF0YVZhbHVlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXZhbHVlXVwiKSk7XG4gICAgdGhpcy50b3RhbENhc2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsLWNhc2hcIik7XG5cbiAgICB0aGlzLmdldERvdENsaWNrZWQoKTtcblx0dGhpcy5nZXRJdGVtVG9SZW1vdmUoKTtcblxuICB9XG5cbiAgZ2V0RG90Q2xpY2tlZCgpIHtcbiAgICBjb25zdCBkb3RzID0gQXJyYXkuZnJvbSh0aGlzLmRvdHMpXG4gICAgZG90cy5tYXAoKGQsIGkpID0+IHtcbiAgICAgIGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuXHRcdGRvdHMubWFwKGk9PiBpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcblx0XHRlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB0aGlzLm1vdmVTbGlkZShpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIG1vdmVTbGlkZShpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgdGhpcy53cmFwcGVyLnN0eWxlLm1hcmdpbkxlZnQgPSBgJHt0aGlzLmNhbGN1bGF0ZVdyYXBwZXIoKSAvIDR9cHhgO1xuICAgIH1cbiAgICBjb25zdCB0b3RhbCA9IHRoaXMuY2FsY3VsYXRlV3JhcHBlcigpICogaW5kZXggLSB0aGlzLmNhbGN1bGF0ZVdyYXBwZXIoKSAvIDQ7XG5cbiAgICB0aGlzLndyYXBwZXIuc3R5bGUubWFyZ2luTGVmdCA9IGAtJHt0b3RhbH1weGA7XG4gIH1cbiAgY2FsY3VsYXRlV3JhcHBlcigpIHtcbiAgICBjb25zdCBtYXJnaW5zID0gdGhpcy5jZWxsV2lkdGgubWFwKHAgPT4ge1xuXG4gICAgICBjb25zdCBlbGVtID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUocCk7XG5cdCAgY29uc3QgbWFyZ2luQXJyYXkgPSBwYXJzZUludChlbGVtLm1hcmdpbkxlZnQucmVwbGFjZShcInB4XCIsIFwiXCIpLCAxMCkgKyBwYXJzZUludChlbGVtLm1hcmdpblJpZ2h0LnJlcGxhY2UoXCJweFwiLCBcIlwiKSwgMTApO1xuXG4gICAgICByZXR1cm4gbWFyZ2luQXJyYXk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFyc2VJbnQobWFyZ2lucywgMTApICsgcGFyc2VJbnQodGhpcy5jZWxsV2lkdGhbMF0uY2xpZW50V2lkdGgsIDEwKTtcbiAgfVxuICBnZXRJdGVtVG9SZW1vdmUoKSB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMudHJhc2hJdGVtLm1hcCh0cmFzaCA9PiB7XG4gICAgICB0cmFzaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4ge1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uO1xuXHRcdGxldCBwYXJlbnQgPSAnJztcblxuXHRcdGNvbnNvbGUubG9nKGUudGFyZ2V0LnRhZ05hbWUpXG5cdFx0aWYoZS50YXJnZXQudGFnTmFtZSA9PSAnSU1HJyl7XG5cdFx0XHRwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cdFx0fWVsc2V7XG5cdFx0XHRwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuXHRcdH1cbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBjb25zdCBhZGRDbGFzcyA9IHBhcmVudC5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlXCIpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShhZGRDbGFzcyk7XG5cdFx0ICB9LCA1MDApO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLnRoZW4oKCkgPT4ge1xuXG5cdFx0XHRwYXJlbnQucmVtb3ZlKCk7XG5cbiAgICAgICAgfSkudGhlbigoKT0+e1xuXG5cdFx0XHR0aGlzLnNldFRvdGFsVmFsdWUoKTtcblx0XHRcdHRoaXMuY2FsY3VsYXRlVG90YWwoKTtcblxuXHRcdH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgY2FsY3VsYXRlVG90YWwoKSB7XG5cbiAgICBsZXQgdG90YWwgPSB0aGlzLmRhdGFWYWx1ZXNcbiAgICAgIC5tYXAoZSA9PiB0aGlzLmNsZWFuVmFsdWUoZS5kYXRhc2V0LnZhbHVlKSlcbiAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGEpICsgcGFyc2VJbnQoYik7XG4gICAgICB9LCAwKTtcblxuXHRyZXR1cm4gdG90YWw7XG5cbiAgfVxuICBzZXRUb3RhbFZhbHVlKCkge1xuXG5cdHRoaXMuZGF0YVZhbHVlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXZhbHVlXVwiKSk7XG5cblx0aWYodGhpcy5jYWxjdWxhdGVUb3RhbCgpID09IDApe1xuXG5cdFx0dGhpcy50b3RhbENhc2gudGV4dENvbnRlbnQgPSAnVm9jw6ogZmFsaXUnO1xuXHR9ZWxzZXtcblxuXHRcdHRoaXMudG90YWxDYXNoLnRleHRDb250ZW50ID0gYFIkICR7dGhpcy5mb3JtYXRSZWFsKHRoaXMuY2FsY3VsYXRlVG90YWwoKSl9YDtcblx0fVxuICB9XG4gIGZvcm1hdFJlYWwoaW50KSB7XG4gICAgbGV0IHRtcCA9IGludCArIFwiXCI7XG4gICAgdG1wID0gdG1wLnJlcGxhY2UoLyhbMC05XXsyfSkkL2csIFwiLCQxXCIpO1xuICAgIGlmICh0bXAubGVuZ3RoID4gNikgdG1wID0gdG1wLnJlcGxhY2UoLyhbMC05XXszfSksKFswLTldezJ9JCkvZywgXCIuJDEsJDJcIik7XG5cbiAgICByZXR1cm4gdG1wO1xuICB9XG4gIGNsZWFuVmFsdWUodmFsdWVTdHJpbmcpIHtcbiAgICByZXR1cm4gdmFsdWVTdHJpbmcucmVwbGFjZSgvWyFAIyQlXiYqLixdL2csIFwiXCIpO1xuICB9XG59XG5uZXcgQ2Fyb3VzZWwoKTtcblxuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dev/assets/js/index.js\n");

/***/ })

/******/ });