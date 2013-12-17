import os

from fabric.api import *
from fabric.colors import red, green, yellow
from fabric.contrib import django
from fabric.contrib.files import exists

if not os.environ.get('WORKON_HOME'):
    print red('`WORKON_HOME` is not set! ')
    exit()

# Initialize fabric env
env.workon_home = os.environ.get('WORKON_HOME')
env.venv_name = '{{ project_name }}_env'
env.virtualenv = os.path.join(env.workon_home, env.venv_name)
env.project_dir = '{{ project_directory }}'
env.requirements = os.path.join(env.project_dir, 'requirements/development.txt')
env.django_settings_module = '{{ project_name }}.settings.development'

# Set static_root from django settings
django.settings_module(env.django_settings_module)
from django.conf import settings as django_settings
env.static_root = django_settings.STATIC_ROOT
env.less_path = os.path.join(env.static_root, 'less')
env.css_path = os.path.join(env.static_root, 'css')
    
def ensure_virtualenv():
    """
    Make sure virtual environ existed. Create one if it doesn't.
    """
    if os.path.isdir(env.virtualenv):
        return

    print yellow('{0} does not exist !'.format(env.virtualenv))
    local('/bin/bash -l -c ". /usr/local/bin/virtualenvwrapper.sh && mkvirtualenv {0}"'.format(env.venv_name))


def virtualenv(venv_dir):
    """
    Context manager that establishes a virtualenv to use.
    """
    return settings(venv=venv_dir)    

def local_venv(command, **kwargs):
    """
    Run local command in the virtualenv which has been specified by using
    the `virtualenv()` context manager.
    """
    with prefix('. {0}/bin/activate'.format(env.venv)):
        local(command, **kwargs);

def install_dependencies():
    """
    Install dependencies via requirements.txt
    """
    ensure_virtualenv()

    with virtualenv(env.virtualenv):
        local_venv('easy_install -U distribute')    # don't know why ...
        local_venv('pip install -r {0}'.format(env.requirements))
        

def check_static_root():
    """
    Make sure `STATIC_ROOT` is valid (not empty or root directory)
    """
    if env.static_root.strip() == '' or env.static_root.strip() == '/':
        print red('STATIC_ROOT should not be empty !')
        exit()

def build_css():
    """
    Build CSS from LESS
    """
    with lcd(env.less_path):
        for less in glob.glob(env.lcwd + '/*.less'):
            basename = os.path.basename(less)
            filename = os.path.splitext(basename)[0]
            css = os.path.join(env.css_path, filename + '.css')
            local('lessc {0} {1}'.format(less, css))

@task
def run_tests():
    """
    Run the Django test suite as is.
    """
    with virtualenv(env.virtualenv):
        local_venv('python manage.py test')

@task
def build_static():
    """
    Collect and build static files.
    """
    check_static_root()

    with virtualenv(env.virtualenv):
        local_venv('python manage.py collectstatic -v 0 --clear --noinput')
        build_css()
