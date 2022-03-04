# Fresno Field Archers

## Development Setup:
Requirements:
* `npm` and `pip` installed. 
* Configured PostgreSQL database
* Configured AWS S3 Bucket and IAM access

### Setting dev environment:
– Install required Python packages: `$ pip install -r requirements.txt`

– Run `$ npm install` 

– The following environment variables must be configured for `ffa/ffa/settings.py` :

*Note that environment variables should be set to string values.*

* `DJANGO_SECRET_KEY`

* `DJANGO_DEBUG`

* `DJANGO_DB_NAME` 

* `DJANGO_DB_USER` 

* `DJANGO_DB_PASS` 

* `DJANGO_AWS_ACCESS_KEY` 

* `DJANGO_AWS_SECRET_ACCESS_KEY`

* `DJANGO_AWS_BUCKET_NAME`

### Running dev build:
– Build frontend React app: `$ npm run dev` //  *scripts use webpack, see `package.json` and `webpack.config.js` for details*

– `$ python manage.py runserver` to start local server.

### Production build notes:
– Environment variables should be configured as before but with `DJANGO_DEBUG = 'False'` (make sure it's a string).

– Production server uses Ubuntu 18.04 with Gunicorn workers and Nginx reverse proxy. 

– Collect static files for serving in production with `python manage.py collectstatic`



