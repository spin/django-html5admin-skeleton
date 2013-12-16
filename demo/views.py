# -*- coding: utf-8 -*-
from django.utils.translation import ugettext as _
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.conf import settings

def form(request):
    """
    Demo form
    """
    context = {
        'title'             : _(u'Form'),
    }

    return render_to_response(
        'demo_form.html',
        context,
        RequestContext(request))

def datatables(request):
    """
    Demo DataTables
    """
    context = {
        'title'     : _(u'Data Table')     
    }

    return render_to_response(
        'demo_datatbles.html',
        context,
        RequestContext(request))

