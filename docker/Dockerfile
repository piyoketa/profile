FROM node:20-alpine

# bash をインストール
RUN apk add --no-cache bash

WORKDIR /app
EXPOSE 5173

# Node の entrypoint を無効化して bash をデフォルトに
ENTRYPOINT ["/bin/bash", "-c"]
CMD ["while true; do sleep 1000; done"]
