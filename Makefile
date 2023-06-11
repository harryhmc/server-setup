install:
	cd docker/greeter; \
	npm install
# docker install steps
# terraform install steps

build:
	cd docker; \
	docker compose build

up:
	cd docker; \
	docker compose up -d

down:
	cd docker; \
	docker compose down

unit-test:
	cd docker/greeter; \
	npm test

int-test: build up;\
	echo ""