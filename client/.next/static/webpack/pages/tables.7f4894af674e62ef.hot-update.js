"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tables",{

/***/ "./src/views/tables/TableBasic.tsx":
/*!*****************************************!*\
  !*** ./src/views/tables/TableBasic.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/Paper/index.js\");\n/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Table */ \"./node_modules/@mui/material/Table/index.js\");\n/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TableRow */ \"./node_modules/@mui/material/TableRow/index.js\");\n/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/TableHead */ \"./node_modules/@mui/material/TableHead/index.js\");\n/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TableBody */ \"./node_modules/@mui/material/TableBody/index.js\");\n/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TableCell */ \"./node_modules/@mui/material/TableCell/index.js\");\n/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/TableContainer */ \"./node_modules/@mui/material/TableContainer/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// ** MUI Imports\n\n\n\n\n\n\n\nvar _this = undefined;\nvar createData = function(name, calories, fat, carbs, protein) {\n    return {\n        name: name,\n        calories: calories,\n        fat: fat,\n        carbs: carbs,\n        protein: protein\n    };\n};\nvar rows = [\n    createData('Frozen yoghurt', 159, 6, 24, 4),\n    createData('Ice cream sandwich', 237, 9, 37, 4.3),\n    createData('Eclair', 262, 16, 24, 6),\n    createData('Cupcake', 305, 3.7, 67, 4.3),\n    createData('Gingerbread', 356, 16, 49, 3.9)\n];\nvar TableBasic = function() {\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        component: _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        __source: {\n            fileName: \"/Users/gajendra/Documents/WilQue/client/src/views/tables/TableBasic.tsx\",\n            lineNumber: 24,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Table__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            sx: {\n                minWidth: 650\n            },\n            \"aria-label\": \"simple table\",\n            __source: {\n                fileName: \"/Users/gajendra/Documents/WilQue/client/src/views/tables/TableBasic.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    __source: {\n                        fileName: \"/Users/gajendra/Documents/WilQue/client/src/views/tables/TableBasic.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        __source: {\n                            fileName: \"/Users/gajendra/Documents/WilQue/client/src/views/tables/TableBasic.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                __source: {\n                                    fileName: \"/Users/gajendra/Documents/WilQue/client/src/views/tables/TableBasic.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: \"Dessert (100g serving)\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                align: \"left\",\n                                __source: {\n                                    fileName: \"/Users/gajendra/Documents/WilQue/client/src/views/tables/TableBasic.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: \"Calories\"\n                            })\n                        ]\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    __source: {\n                        fileName: \"/Users/gajendra/Documents/WilQue/client/src/views/tables/TableBasic.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: rows.map(function(row) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            sx: {\n                                '&:last-of-type td, &:last-of-type th': {\n                                    border: 0\n                                }\n                            },\n                            __source: {\n                                fileName: \"/Users/gajendra/Documents/WilQue/client/src/views/tables/TableBasic.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    component: \"th\",\n                                    scope: \"row\",\n                                    __source: {\n                                        fileName: \"/Users/gajendra/Documents/WilQue/client/src/views/tables/TableBasic.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: row.name\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    align: \"left\",\n                                    __source: {\n                                        fileName: \"/Users/gajendra/Documents/WilQue/client/src/views/tables/TableBasic.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: row.calories\n                                })\n                            ]\n                        }, row.name);\n                    })\n                })\n            ]\n        })\n    }));\n};\n_c = TableBasic;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableBasic);\nvar _c;\n$RefreshReg$(_c, \"TableBasic\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvdGFibGVzL1RhYmxlQmFzaWMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLEVBQWlCO0FBQ3NCO0FBQ0E7QUFDTTtBQUNFO0FBQ0E7QUFDQTtBQUNVOztBQUV6RCxHQUFLLENBQUNPLFVBQVUsR0FBRyxRQUFRLENBQVBDLElBQVksRUFBRUMsUUFBZ0IsRUFBRUMsR0FBVyxFQUFFQyxLQUFhLEVBQUVDLE9BQWUsRUFBSyxDQUFDO0lBQ25HLE1BQU0sQ0FBQyxDQUFDO1FBQUNKLElBQUksRUFBSkEsSUFBSTtRQUFFQyxRQUFRLEVBQVJBLFFBQVE7UUFBRUMsR0FBRyxFQUFIQSxHQUFHO1FBQUVDLEtBQUssRUFBTEEsS0FBSztRQUFFQyxPQUFPLEVBQVBBLE9BQU87SUFBQyxDQUFDO0FBQ2hELENBQUM7QUFFRCxHQUFLLENBQUNDLElBQUksR0FBRyxDQUFDO0lBQ1pOLFVBQVUsQ0FBQyxDQUFnQixpQkFBRSxHQUFHLEVBQUUsQ0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFHO0lBQzlDQSxVQUFVLENBQUMsQ0FBb0IscUJBQUUsR0FBRyxFQUFFLENBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRztJQUNsREEsVUFBVSxDQUFDLENBQVEsU0FBRSxHQUFHLEVBQUUsRUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFHO0lBQ3ZDQSxVQUFVLENBQUMsQ0FBUyxVQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUc7SUFDdkNBLFVBQVUsQ0FBQyxDQUFhLGNBQUUsR0FBRyxFQUFFLEVBQUksRUFBRSxFQUFFLEVBQUUsR0FBRztBQUM5QyxDQUFDO0FBRUQsR0FBSyxDQUFDTyxVQUFVLEdBQUcsUUFDbkIsR0FEeUIsQ0FBQzs7SUFDeEIsTUFBTSxzRUFDSFIsb0VBQWM7UUFBQ1MsU0FBUyxFQUFFZiwyREFBSzs7Ozs7Ozt3RkFDN0JDLDJEQUFLO1lBQUNlLEVBQUUsRUFBRSxDQUFDO2dCQUFDQyxRQUFRLEVBQUUsR0FBRztZQUFDLENBQUM7WUFBRUMsQ0FBVSxhQUFDLENBQWM7Ozs7Ozs7O3FGQUNwRGYsK0RBQVM7Ozs7Ozs7b0dBQ1BELDhEQUFROzs7Ozs7OztpR0FDTkcsK0RBQVM7Ozs7Ozs7MENBQUMsQ0FBc0I7O2lHQUNoQ0EsK0RBQVM7Z0NBQUNjLEtBQUssRUFBQyxDQUFNOzs7Ozs7OzBDQUFDLENBQVE7Ozs7O3FGQUluQ2YsK0RBQVM7Ozs7Ozs7OEJBQ1BTLElBQUksQ0FBQ08sR0FBRyxDQUFDQyxRQUFRLENBQVJBLEdBQUc7c0NBQ1gsTUFBTSx5REFBTG5CLDhEQUFROzRCQUVQYyxFQUFFLEVBQUUsQ0FBQztnQ0FDSCxDQUFzQyx1Q0FBRSxDQUFDO29DQUN2Q00sTUFBTSxFQUFFLENBQUM7Z0NBQ1gsQ0FBQzs0QkFDSCxDQUFDOzs7Ozs7OztxR0FFQWpCLCtEQUFTO29DQUFDVSxTQUFTLEVBQUMsQ0FBSTtvQ0FBQ1EsS0FBSyxFQUFDLENBQUs7Ozs7Ozs7OENBQ2xDRixHQUFHLENBQUNiLElBQUk7O3FHQUVWSCwrREFBUztvQ0FBQ2MsS0FBSyxFQUFDLENBQU07Ozs7Ozs7OENBQUVFLEdBQUcsQ0FBQ1osUUFBUTs7OzJCQVZoQ1ksR0FBRyxDQUFDYixJQUFJOzs7Ozs7QUFrQjNCLENBQUM7S0FoQ0tNLFVBQVU7QUFrQ2hCLCtEQUFlQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy92aWV3cy90YWJsZXMvVGFibGVCYXNpYy50c3g/MDkxZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqKiBNVUkgSW1wb3J0c1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUGFwZXInXG5pbXBvcnQgVGFibGUgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZSdcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlUm93J1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlSGVhZCdcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZUJvZHknXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVDZWxsJ1xuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVDb250YWluZXInXG5cbmNvbnN0IGNyZWF0ZURhdGEgPSAobmFtZTogc3RyaW5nLCBjYWxvcmllczogbnVtYmVyLCBmYXQ6IG51bWJlciwgY2FyYnM6IG51bWJlciwgcHJvdGVpbjogbnVtYmVyKSA9PiB7XG4gIHJldHVybiB7IG5hbWUsIGNhbG9yaWVzLCBmYXQsIGNhcmJzLCBwcm90ZWluIH1cbn1cblxuY29uc3Qgcm93cyA9IFtcbiAgY3JlYXRlRGF0YSgnRnJvemVuIHlvZ2h1cnQnLCAxNTksIDYuMCwgMjQsIDQuMCksXG4gIGNyZWF0ZURhdGEoJ0ljZSBjcmVhbSBzYW5kd2ljaCcsIDIzNywgOS4wLCAzNywgNC4zKSxcbiAgY3JlYXRlRGF0YSgnRWNsYWlyJywgMjYyLCAxNi4wLCAyNCwgNi4wKSxcbiAgY3JlYXRlRGF0YSgnQ3VwY2FrZScsIDMwNSwgMy43LCA2NywgNC4zKSxcbiAgY3JlYXRlRGF0YSgnR2luZ2VyYnJlYWQnLCAzNTYsIDE2LjAsIDQ5LCAzLjkpXG5dXG5cbmNvbnN0IFRhYmxlQmFzaWMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgPFRhYmxlIHN4PXt7IG1pbldpZHRoOiA2NTAgfX0gYXJpYS1sYWJlbD0nc2ltcGxlIHRhYmxlJz5cbiAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICA8VGFibGVDZWxsPkRlc3NlcnQgKDEwMGcgc2VydmluZyk8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249J2xlZnQnPkNhbG9yaWVzPC9UYWJsZUNlbGw+XG5cbiAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICB7cm93cy5tYXAocm93ID0+IChcbiAgICAgICAgICAgIDxUYWJsZVJvd1xuICAgICAgICAgICAgICBrZXk9e3Jvdy5uYW1lfVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICcmOmxhc3Qtb2YtdHlwZSB0ZCwgJjpsYXN0LW9mLXR5cGUgdGgnOiB7XG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29tcG9uZW50PSd0aCcgc2NvcGU9J3Jvdyc+XG4gICAgICAgICAgICAgICAge3Jvdy5uYW1lfVxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj0nbGVmdCc+e3Jvdy5jYWxvcmllc308L1RhYmxlQ2VsbD5cblxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvVGFibGVDb250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVCYXNpY1xuIl0sIm5hbWVzIjpbIlBhcGVyIiwiVGFibGUiLCJUYWJsZVJvdyIsIlRhYmxlSGVhZCIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlQ29udGFpbmVyIiwiY3JlYXRlRGF0YSIsIm5hbWUiLCJjYWxvcmllcyIsImZhdCIsImNhcmJzIiwicHJvdGVpbiIsInJvd3MiLCJUYWJsZUJhc2ljIiwiY29tcG9uZW50Iiwic3giLCJtaW5XaWR0aCIsImFyaWEtbGFiZWwiLCJhbGlnbiIsIm1hcCIsInJvdyIsImJvcmRlciIsInNjb3BlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/views/tables/TableBasic.tsx\n");

/***/ })

});