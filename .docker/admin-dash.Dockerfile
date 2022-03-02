FROM node:alpine

ENV  DEBIAN_FRONTEND=noninteractive

WORKDIR /app

COPY /package.json .

COPY /pnpm-lock.yaml .

RUN nx run travelit-admin-dash-svelte:serve