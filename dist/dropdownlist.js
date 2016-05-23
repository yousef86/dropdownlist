(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["DropDownList"] = factory(require("react"));
	else
		root["DropDownList"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var DropDownList = (function (_super) {
	    __extends(DropDownList, _super);
	    function DropDownList(props) {
	        _super.call(this, props);
	        this.state = {
	            containerClassName: '',
	            NodeIconColorClassName: '',
	            searchSectionVisibility: '',
	            selectedValueState: '',
	            selectedTextState: '',
	            typedText: ''
	        };
	    }
	    DropDownList.prototype.componentDidMount = function () {
	    };
	    DropDownList.prototype.componentWillUnmount = function () {
	    };
	    DropDownList.prototype.onSelectedItemChange = function (value, text) {
	        this.props.onSelectedItemChange(value, text);
	    };
	    DropDownList.prototype.onListItemClick = function (s) {
	        var selectedValue = null;
	        var selectedText = null;
	        if (s != null) {
	            selectedValue = s[this.props.keyFieldName];
	            selectedText = s[this.props.textFieldName];
	        }
	        else {
	            this.onBlur();
	        }
	        if (selectedValue != null)
	            this.refs["nodevalue"].value = selectedText;
	        this.setState({
	            selectedTextState: selectedText ? selectedText : '',
	            selectedValueState: selectedValue ? selectedValue : '',
	            containerClassName: !selectedValue ? '' : 'is-focused',
	            NodeIconColorClassName: !selectedValue ? '' : 'blue',
	            searchSectionVisibility: 'false'
	        });
	        if (selectedValue) {
	            this.onSelectedItemChange(selectedValue, selectedText);
	        }
	    };
	    DropDownList.prototype.onFocus = function () {
	        this.setState({ containerClassName: 'is-focused' });
	        this.setState({ NodeIconColorClassName: 'blue' });
	        this.setState({ searchSectionVisibility: 'true' });
	    };
	    DropDownList.prototype.onBlur = function () {
	        if (this.refs["nodevalue"].value == "") {
	            this.setState({ containerClassName: '' });
	            this.setState({ NodeIconColorClassName: '' });
	        }
	        else {
	            this.setState({ NodeIconColorClassName: 'blue' });
	            this.setState({ searchSectionVisibility: 'false' });
	        }
	        this.setState({ searchSectionVisibility: 'false' });
	    };
	    DropDownList.prototype.onChange = function () {
	        this.setState({ typedText: this.refs["nodevalue"].value });
	    };
	    DropDownList.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("div", {className: "react-dropdownlist-DropDownList-css"}, React.createElement("div", {ref: "node", className: "react-dropdownlist  react-dropdownlist--floating-label " + this.state.containerClassName}, React.createElement("input", {ref: "nodevalue", className: "react-dropdownlist__input", type: "text", id: "react_dropdownlist_label", onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onChange: this.onChange.bind(this)}), this.state.searchSectionVisibility == 'true' &&
	            React.createElement("div", {className: "react-dropdownlist-DropDownListResultSection"}, this.props.data.map(function (s, i) {
	                if (s[_this.props.textFieldName].indexOf(_this.state.typedText) > -1) {
	                    return React.createElement("div", {onMouseDown: _this.onListItemClick.bind(_this, s), className: "react-dropdownlist-RowSelectionDiv", key: i}, _this.props.showValue == true &&
	                        React.createElement("div", {className: "react-dropdownlist-ValueSectionDiv"}, React.createElement("span", {className: "react-dropdownlist-ValueSectionSpan"}, s[_this.props.keyFieldName])), React.createElement("div", {className: "react-dropdownlist-TextSectionDiv"}, React.createElement("span", {className: "react-dropdownlist-TextSectionSpan"}, s[_this.props.textFieldName])));
	                }
	                else {
	                    return null;
	                }
	            })), React.createElement("label", {className: "react-dropdownlist__label", htmlFor: "react_dropdownlist_label"}, this.props.title))));
	    };
	    DropDownList.defaultProps = {
	        keyFieldName: 'id',
	        textFieldName: 'text',
	        showValue: false
	    };
	    return DropDownList;
	}(React.Component));
	;
	module.exports = DropDownList;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;