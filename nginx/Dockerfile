FROM nginx:1.19.1-alpine

RUN cd /etc/nginx/conf.d && rm -rf default.conf
RUN ln -sf /usr/share/zoneinfo/Asia/Ho_Chi_Minh /etc/localtime 
COPY custom_404.html /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/
EXPOSE 80