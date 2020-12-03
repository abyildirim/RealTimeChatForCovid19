# CS447ProjectRealTimeChat

Angular + Django + Socket.iO

For runing project, make sure that following steps is valid.

Node Js install

--npm --version
--npm install -g @angular/cli

Download latest version of python using the link.https://www.python.org/downloads

Make sure to enable the checkbox “Added to the path” while installing python.

To check the installation of python,use the command on command prompt,

--python --version

Make sure that python version is greater than 3.8 like Python 3.8.6

To check the installation of pip, use the below command on cmd

-- pip --version

In the root folder of django_backend

Create Virtual Enviroment 

-- pip install virtualenv

-- py -m venv myenviroment

To activate the environment

-- myenvironment\Scripts\activate

-- py -m pip install --upgrade pip

-- pip install django

# For running project

Activate python enviroment in the folder CS447ProjectRealTimeChat/django_python_backend/chatapp/ 
-- python manage.py runserver

In different terminal, In the folder CS447ProjectRealTimeChat/frontend/real-time-chat/

--ng serve

