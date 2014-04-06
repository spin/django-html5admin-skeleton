/*jslint browser: true, devel: true, nomen: true */
/*global $: true, Backbone: true, define: true, require: true, console: true, _: true */
define([
    'jquery',
    'backbone',
    'bootstrap'
], function ($, Backbone) {
    "use strict";

    // Create global event aggregator
    Backbone.View.prototype.event_aggregator = _.extend({}, Backbone.Events);

    return {
        initialize: function () {
            var moduleName = $('script[data-main][data-start]').attr('data-start');

            if (moduleName) {
                require([moduleName], function (Module) {
                    if ($.isFunction(Module)) {
                        var mainView = new Module();
                        mainView.render();
                    }
                });
            }
        }
    };
});
