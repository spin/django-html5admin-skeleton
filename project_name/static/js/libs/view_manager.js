/**
* Backbone libraries module
*
* @module Libraries
*/

/*jslint browser: true, devel: true, nomen: true */
/*global $: true, Backbone: true, define: true, require: true, console: true, _: true */

define([
    // nothing yet
], function () {
    'use strict';

    /**
     * Object responsible for the transitions between Backbone.js views
     *
     * @class ViewManager
     * @constructor
     */
    var ViewManager = {

        /**
         * Current view DOM element
         *
         * @property el
         * @type String
         * @public
         */
        el: null,

        /**
         * Current displayed view object
         *
         * @property currentView
         * @type Object
         * @extends Backbone.Views
         * @private
         */
        _currentView: null,

        /**
         * Display views needs to be displayed, cleaning up anything that no longer needs to be there.
         *
         * @method show
         * @public
         * @param view {Object} the Backbone.js view object
         * @example
         *   ViewManager.show(formView)
         */
        show: function (view) {
            if (this._currentView) {
                this._currentView.bye();
            }

            this._currentView = view;
            this.el = this._currentView.render().el;

            return this;
        }

    };

    return ViewManager;

});
