FROM node:12

ARG JENKINS_GROUP_ID=2000
ARG JENKINS_USER_ID=2000

RUN groupadd --gid $JENKINS_GROUP_ID jenkins && \
    useradd --uid $JENKINS_USER_ID --gid $JENKINS_GROUP_ID --create-home jenkins && \
    apt-get update && \
    apt-get -y upgrade && \
    apt-get -y install --no-install-recommends jq && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
