#========================
#  Makefile（ルート）
#========================

# 使用するシェルを bash に固定
SHELL := /bin/bash

# docker-compose.yml で定義したサービス名
SERVICE := frontend

#------------------------
# コンテナに入る
#------------------------
enter:
	# 1) コンテナが無ければバックグラウンド起動
	docker compose up -d $(SERVICE)
	# 2) bash シェルでアタッチ
	docker compose exec $(SERVICE) bash

build:
	docker compose build $(SERVICE)

run:
	docker compose up -d $(SERVICE)

