FROM alexxxnf/spa-builder as builder

COPY ./html /app

RUN cd /app \
    && for i in `find | grep -E "\.css$|\.html$|\.js$|\.svg$|\.txt$|\.ttf$"`; do gzip -9kf "$i" && brotli -fZ "$i" ; done

FROM alexxxnf/nginx-spa

COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app /etc/nginx/html/
