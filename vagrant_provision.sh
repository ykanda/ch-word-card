#!/bin/bash
echo "vagrant-provision.sh"


DATA=/vagrant_data
CONF=/vagrant_data/vagrant_conf


# installations
apt-get -y update
apt-get -y install nginx


# make alias for configuration
ln -snb \
  ${CONF}/etc/nginx/sites-available/default \
         /etc/nginx/sites-available/default


# make alias WEBROOT
WEBROOT=/usr/share/nginx/www
if test -d ${WEBROOT}; then
  rm -rf ${WEBROOT}
  ln -snb ${DATA}/dest ${WEBROOT}
fi


# starting nginx.
service nginx status
if test $? -eq 0 ; then 
  service nginx configtest
  service nginx restart
else
  service nginx configtest
  service nginx start
fi
