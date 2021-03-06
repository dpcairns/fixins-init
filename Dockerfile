FROM ubuntu

# Create app directory
RUN mkdir -p /usr/src/app
RUN mkdir -p /data/db
RUN touch ~/.bash_profile
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
RUN echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
RUN apt-get -y update && \
    apt-get -y install build-essential && \
    curl -sL https://deb.nodesource.com/setup | bash - && \
    apt-get install -y nodejs npm
RUN apt-get install -y mongodb-org nodejs-legacy

WORKDIR /usr/src/app
# Install app dependencies
COPY package.json /usr/src/app/

# Bundle app source
COPY . /usr/src/app
RUN nodejs server.js

EXPOSE 4444
