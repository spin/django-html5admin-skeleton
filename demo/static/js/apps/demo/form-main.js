/*jslint browser: true, devel: true, nomen: true */
/*global $: true, Backbone: true, define: true, require: true, console: true, _: true */

define([
    './views/demo_form_view'
], function (DemoFormView) {
    "use strict";

    var formView = new DemoFormView();
    formView.render();
});
