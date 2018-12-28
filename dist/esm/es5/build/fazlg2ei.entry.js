/*! Built with http://stenciljs.com */
import{h}from"../convergence.core.js";var FeaturedButton=function(){function e(){var e=this;this.label="Click me",this.onClickHandler=function(){e.featuredButtonClicked.emit()}}return e.prototype.render=function(){return h("button",{onClick:this.onClickHandler},this.label)},Object.defineProperty(e,"is",{get:function(){return"featured-button"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0},label:{type:String,attr:"label",reflectToAttr:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"featuredButtonClicked",method:"featuredButtonClicked",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host,:host *{-webkit-box-sizing:border-box;box-sizing:border-box}button{cursor:pointer;color:#000;font-size:12px;border:1px solid #000;background:transparent;outline:none;padding:10px}button:hover{background:grey}"},enumerable:!0,configurable:!0}),e}();export{FeaturedButton};