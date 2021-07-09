.PHONY: install dev test build preview pack packinstall example

DOCKER_COMPOSE_RUN_OPTIONS=--rm

ifeq (${CI},true)
	DOCKER_COMPOSE_RUN_OPTIONS=--rm --user root -T
endif

YARN_OPTIONS=--strict-semver --ignore-optional --emoji true

install:
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) yarn $(YARN_OPTIONS)

dev:
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) --publish 3000:3000 yarn $(YARN_OPTIONS) dev --host

test:
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) yarn $(YARN_OPTIONS) test

build:
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) yarn $(YARN_OPTIONS) build

preview:
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) npm pack --dry-run

pack:
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) bash rm -rf *.tgz
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) yarn pack preact-switch.tgz

packinstall:
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) bash mv $(shell ls *.tgz | cut -f 1 | head -1) preact-switch.tgz
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) yarn remove @aminnairi/preact-switch
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) yarn add ./preact-switch.tgz

example:
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) yarn vite --config vite.config.example.js build
