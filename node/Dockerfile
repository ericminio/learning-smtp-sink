FROM ericminio/node

USER root
RUN mkdir -p /home/dev/node
COPY ./node /home/dev/node
RUN chown -R dev:dev /home/dev/node

USER dev
WORKDIR /home/dev