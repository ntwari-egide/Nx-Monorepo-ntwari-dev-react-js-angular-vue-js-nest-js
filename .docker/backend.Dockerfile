FROM rfprod/nx-ng-starter:base-latest

ENV DEBIAN_FRONTEND=noninteractive

WORKDIR /app

COPY /apps/travelit-backend ./app/travelit-backend

EXPOSE 8080 8082

CMD ["nx","serve"]