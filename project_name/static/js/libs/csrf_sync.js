/**
* Backbone libraries module
*
* @module Libraries
*/

/*jslint browser: true, devel: true, nomen: true */
/*global $: true, Backbone: true, define: true, require: true, console: true, _: true */

define([
    'backbone',
    'jcookie'
], function (Backbone) {
    'use strict';

    var origSync = Backbone.sync;
    Backbone.sync = function (method, model, options) {
        options.beforeSend = function (xhr) {
            xhr.setRequestHeader('X-CSRFToken', $.cookie('csrftoken'));
        };

        return origSync(method, model, options);
    };

});
