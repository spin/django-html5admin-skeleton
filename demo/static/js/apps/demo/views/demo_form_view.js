/**
 * HTML5Admin views module
 *
 * @module Views
 */

/*jslint browser: true, devel: true, nomen: true */
/*global $: true, Backbone: true, define: true, require: true, console: true, _: true */

define([
    'jquery',
    'bootstrapDatetimePicker'
], function ($) {
    'use strict';

    /**
     * HTML5Admin demo form view
     *
     * @class DemoFormView
     * @constructor
     * @extends Backbone.View
     */
    var DemoFormView = Backbone.View.extend({

        id: '#form_demo',

        events: {
        },

        /**
         * Initialize bootstrap DatetimePicker widget.
         *
         * @method _initDateTimePicker
         * @private
         */
        _initDateTimePicker: function () {
            $('#datetimepicker-id_bill_date').datetimepicker({
                language: 'en',
                pickTime: false,
                format: 'yyyy-MM-dd'
            });

            $('#datetimepicker-id_departure_date').datetimepicker({
                language: 'en',
                pickTime: false,
                format: 'yyyy-MM-dd'
            });

            $('#datetimepicker-id_gathering_time').datetimepicker({
                language: 'en',
                pickDate: false,
            });
        },

        /**
         * Initialize the form view
         *
         * @method initialize
         * @public
         * @param params {Object} parameter container
         */
        initialize: function () {
            _.bindAll(this, 'render');
        },

        /**
         * Render the form view.
         *
         * @method render
         * @public
         */
        render: function () {
            var that = this;

            that._initDateTimePicker();

            return this;
        },

        /**
         * Remove the DOM and events of the view object
         *
         * @method bye
         * @public
         */
        bye: function () {
            this.remove();
            this.off();

            // Destroy datetimepicker widget
            $('#datetimepicker-id_bill_date').datetimepicker('destroy');
            $('#datetimepicker-id_departure_date').datetimepicker('destroy');
            $('#datetimepicker-id_gathering_time').datetimepicker('destroy');
        }

    });

    return DemoFormView;

});
