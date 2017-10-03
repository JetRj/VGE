"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_class_component_1 = require("vue-class-component");
// tslint:disable-next-line:no-duplicate-imports
require("../../dist/vue");
var vue_2 = require("../../dist/vue");
var common_1 = require("../common");
var DeleteButton = (function (_super) {
    __extends(DeleteButton, _super);
    function DeleteButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeleteButton.prototype.click = function () {
        var parent = vue_2.getNodeFromPath(this.data.root, this.data.path.slice(0, this.data.path.length - 1));
        var children = parent && parent.children ? parent.children : this.data.root;
        var index = this.data.path[this.data.path.length - 1];
        children.splice(index, 1);
    };
    return DeleteButton;
}(vue_1.default));
DeleteButton = __decorate([
    vue_class_component_1.default({
        template: "<button @click=\"click()\">delete</button>",
        props: ["data"],
    })
], DeleteButton);
vue_1.default.component("delete-button", DeleteButton);
var data8 = JSON.parse(JSON.stringify(common_1.data));
for (var _i = 0, data8_1 = data8; _i < data8_1.length; _i++) {
    var tree = data8_1[_i];
    common_1.setContextMenu(tree, "delete-button");
}
var CustomNode = (function (_super) {
    __extends(CustomNode, _super);
    function CustomNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CustomNode;
}(vue_1.default));
CustomNode = __decorate([
    vue_class_component_1.default({
        template: "<span><span style=\"color: red\">{{data.value.id}}</span>{{data.text}}</span>",
        props: ["data"],
    })
], CustomNode);
vue_1.default.component("custom-node", CustomNode);
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = common_1.data;
        _this.selectedId = null;
        _this.data2 = JSON.parse(JSON.stringify(common_1.data));
        _this.data3 = JSON.parse(JSON.stringify(common_1.data));
        _this.data4 = JSON.parse(JSON.stringify(common_1.data));
        _this.data5 = JSON.parse(JSON.stringify(common_1.data));
        _this.data6 = JSON.parse(JSON.stringify(common_1.data));
        _this.data7 = JSON.parse(JSON.stringify(common_1.data));
        _this.data8 = data8;
        _this.data9 = JSON.parse(JSON.stringify(common_1.data));
        _this.dropAllowed = common_1.canMove;
        return _this;
    }
    App.prototype.toggle = function (eventData) {
        common_1.toggle(eventData, "custom-node");
    };
    App.prototype.change = function (eventData) {
        this.selectedId = eventData.data.state.selected ? null : eventData.data.value.id;
        if (!eventData.data.state.selected) {
            for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
                var child = _a[_i];
                common_1.clearSelectionOfTree(child);
            }
        }
        eventData.data.state.selected = !eventData.data.state.selected;
    };
    App.prototype.toggle2 = function (eventData) {
        common_1.toggle(eventData, "custom-node");
    };
    App.prototype.change2 = function (eventData) {
        common_1.setSelectionOfTree(eventData.data, !eventData.data.state.selected);
        common_1.setParentsSelection(this.data2, eventData.path);
    };
    App.prototype.toggle3 = function (eventData) {
        common_1.toggle(eventData, "custom-node");
    };
    App.prototype.drop3 = function (dropData) {
        common_1.move(dropData, this.data3);
    };
    App.prototype.toggle4 = function (eventData) {
        common_1.toggle(eventData, "custom-node");
    };
    App.prototype.toggle5 = function (eventData) {
        common_1.toggle(eventData, "custom-node");
    };
    App.prototype.toggle6 = function (eventData) {
        common_1.toggle(eventData, "custom-node");
    };
    App.prototype.toggle7 = function (eventData) {
        common_1.toggle(eventData, "custom-node");
    };
    App.prototype.change7 = function (eventData) {
        common_1.setSelectionOfTree(eventData.data, !eventData.data.state.selected);
        common_1.setParentsSelection(this.data7, eventData.path);
    };
    App.prototype.drop7 = function (dropData) {
        common_1.move(dropData, this.data7);
    };
    App.prototype.toggle8 = function (eventData) {
        common_1.toggle(eventData, "custom-node");
    };
    App.prototype.toggle9 = function (eventData) {
        common_1.toggle(eventData, "custom-node");
    };
    return App;
}(vue_1.default));
App = __decorate([
    vue_class_component_1.default({
        template: "\n    <div>\n        <a href=\"https://github.com/plantain-00/tree-component/tree/master/demo/vue/index.ts\" target=\"_blank\">the source code of the demo</a>\n        <br/>\n        default:\n        <tree :data=\"data\"\n            @toggle=\"toggle($event)\"\n            @change=\"change($event)\"></tree>\n        selected id: {{selectedId}}\n        <hr/>\n        checkbox:\n        <tree :data=\"data2\"\n            :checkbox=\"true\"\n            @toggle=\"toggle2($event)\"\n            @change=\"change2($event)\"></tree>\n        <hr/>\n        draggable:\n        <tree :data=\"data3\"\n            :draggable=\"true\"\n            :drop-allowed=\"dropAllowed\"\n            @toggle=\"toggle3($event)\"\n            @drop=\"drop3($event)\"></tree>\n        <hr/>\n        no dots:\n        <tree :data=\"data4\"\n            :nodots=\"true\"\n            @toggle=\"toggle4($event)\"></tree>\n        <hr/>\n        large:\n        <tree :data=\"data5\"\n            size=\"large\"\n            @toggle=\"toggle5($event)\"></tree>\n        <hr/>\n        small:\n        <tree :data=\"data6\"\n            size=\"small\"\n            @toggle=\"toggle6($event)\"></tree>\n        <hr/>\n        dark theme:\n        <tree :data=\"data7\"\n            theme=\"dark\"\n            :checkbox=\"true\"\n            :draggable=\"true\"\n            @toggle=\"toggle7($event)\"\n            @change=\"change7($event)\"\n            @drop=\"drop7($event)\"></tree>\n        <hr/>\n        contextmenu:\n        <tree :data=\"data8\"\n            @toggle=\"toggle8($event)\"></tree>\n        <br/>\n        node id:\n        <tree :data=\"data9\"\n            preid=\"test_\"\n            @toggle=\"toggle9($event)\"></tree>\n    </div>\n    ",
    })
], App);
new App({ el: "#container" });
