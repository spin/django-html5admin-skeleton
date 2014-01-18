from django.contrib.auth.views import logout_then_login
from django.core.urlresolvers import reverse
from django.conf import settings

def logout(request):
    """
    Log the user out, redirect to login page.
    """
    return logout_then_login(request, 
                             login_url=reverse('django.contrib.auth.views.login'))
