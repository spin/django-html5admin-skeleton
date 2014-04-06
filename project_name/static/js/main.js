/*jslint browser: true, devel: true, nomen: true */
/*global $: true, Backbone: true, define: true, require: true, console: true, _: true */
require.config({
    baseUrl: '/project_name_static/js',
    paths: {
        'jquery'                    : 'libs/jquery/jquery-1.9.1.min',
        'underscore'                : 'libs/underscore-min',
        'backbone'                  : 'libs/backbone-min',
        'csrfSync'                  : 'libs/csrf_sync',
        'bootstrap'                 : 'libs/bootstrap/bootstrap.min',
        'datatables'                : 'libs/jquery/jquery.dataTables.min',
        'datatablesPaging'          : 'libs/jquery/jquery.dataTables.paging',
        'datatablesReloadAjax'      : 'libs/jquery/jquery.dataTables.reloadajax',
        'jcookie'                   : 'libs/jquery/jquery.cookie',
        'jquery.fileupload'         : 'libs/jquery/jquery.fileupload',
        'jquery.ui.widget'          : 'libs/jquery/jquery.ui.widget',
        'jquery.iframe-transport'   : 'libs/jquery/jquery.iframe-transport',
        'bootstrapDatetimePicker'   : 'libs/bootstrap/bootstrap-datetimepicker',
        'messageHelper'             : 'helpers/message_helper',
        'stringHelper'              : 'helpers/string_helper',
        'formHelper'                : 'helpers/form_helper',
        'text'                      : 'libs/require/text',
        'order'                     : 'libs/require/order'
    },
    shim: {
        'jquery': {
            exports : '$'
        },
        'underscore': {
            exports : '_'
        },
        'backbone': {
            deps    : ['underscore', 'jquery'],
            exports : 'Backbone'
        },
        'jcookie': {
            deps    : ['jquery']
        },
        'csrfSync': {
            deps    : ['jcookie']
        },
        'datatables': {
            deps    : ['jquery', 'bootstrap']
        },
        'datatablesPaging': {
            deps    : ['datatables']
        },
        'datatablesReloadAjax': {
            deps    : ['datatables']
        },
        'bootstrapDatetimePicker': {
            deps    : ['jquery', 'bootstrap']
        },
        'jquery.fileupload': {
            deps    : ['jquery', 'jquery.ui.widget', 'jquery.iframe-transport']
        },
        'app': {
            deps    : ['csrfSync']
        }
    }
});

require([
    'app'
], function () {
    "use strict";

    var App = _.last(arguments);
    App.initialize();
});

