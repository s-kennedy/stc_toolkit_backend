webpackJsonp([0xb2c7ae8e6d15],{167:function(e,t,n){e.exports=n.p+"static/home_header.c009805c.jpg"},55:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),r=o(a),i={title:{margin:0}},u=function(e){return r.default.createElement("div",{className:"display-title edit-container"},r.default.createElement("h1",null,r.default.createElement("span",{className:"headline-holder",style:i.headlineHolder},e.text)))};t.default=u,e.exports=t.default},105:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),l=o(u),c=(n(23),n(24)),d=o(c),s=n(55),f=o(s),p=n(35),g=o(p),h=function(e){function t(n){a(this,t);var o=r(this,e.call(this,n));return o.state={editing:!1},o.toggleEditing=function(){return o._toggleEditing()},o.doneEditing=function(e){return o._doneEditing(e)},o}return i(t,e),t.prototype._toggleEditing=function(){this.setState({editing:!this.state.editing})},t.prototype._doneEditing=function(e){this.toggleEditing(),this.props.updateTitle(e)},t.prototype.render=function(){return this.state.editing?l.default.createElement("div",{className:"display-title edit-container"},l.default.createElement("h1",{className:"display-3"},l.default.createElement(g.default,{text:this.props.text,doneEditing:this.doneEditing}))):l.default.createElement(d.default,{toggleEditing:this.toggleEditing},l.default.createElement(f.default,{text:this.props.text}))},t}(l.default.Component);h.propTypes={},t.default=h,e.exports=t.default},106:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return{title:e.pageData.title,isEditingPage:e.adminTools.isEditingPage}}function r(e){return{onUpdateTitle:function(t){e((0,c.updatePageTitle)(t))}}}t.__esModule=!0;var i=n(1),u=o(i),l=n(11),c=n(12),d=n(105),s=o(d),f=n(55),p=o(f),g=n(23),h=n(167),m=o(h),y={jumbotron:{display:"flex",background:"url("+m.default+") no-repeat center center",backgroundSize:"cover",height:"65vh",minHeight:"440px",alignItems:"flex-end"}},E=function(e){return u.default.createElement(g.Jumbotron,{style:y.jumbotron},e.isEditingPage?u.default.createElement(s.default,{text:e.title,updateTitle:e.onUpdateTitle}):u.default.createElement(p.default,{text:e.title}))};t.default=(0,l.connect)(a,r)(E),e.exports=t.default},333:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{content:e.content,pageData:e.pageData}}function l(e){return{onUpdatePageContent:function(t){e((0,m.updatePageContent)(t))},onUpdatePageMetaData:function(t){e((0,m.updatePageMetaData)(t))}}}t.__esModule=!0,t.query=void 0;var c=n(1),d=o(c),s=n(77),f=o(s),p=n(106),g=o(p),h=(n(56),n(36),n(11)),m=n(12),y=function(e){function t(n){a(this,t);var o=r(this,e.call(this,n));return o.props.onUpdatePageContent(JSON.parse(o.props.data.pages.childPagesContent.internal.content)),o.props.onUpdatePageMetaData(JSON.parse(o.props.data.pages.internal.content)),o}return i(t,e),t.prototype.render=function(){return d.default.createElement("div",{className:"home"},d.default.createElement(g.default,null),d.default.createElement(f.default,null))},t}(d.default.Component);y.propTypes={},t.default=(0,h.connect)(u,l)(y);t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-home-jsx-8dd36ff4e17ce3906d20.js.map