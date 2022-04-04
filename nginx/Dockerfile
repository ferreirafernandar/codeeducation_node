FROM nginx
RUN apt-get update && apt-get install -y wget
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]