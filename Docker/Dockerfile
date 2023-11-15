FROM node:20.9.0-alpine3.18

# can use "apk" as the alpine package manager
RUN mkdir /app
WORKDIR /app/frontend
RUN apk add bash


# Once docker boots up
# it copies the node_modules back to local
#  which i don't want, but fix later :)
# TODO: figure out how to not copy node_modules
