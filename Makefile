install:
	cd docker/greeter; \
	npm install

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
	cd integration-tests;\
	pip3 install pytest;\
	python3 -m "pytest"
