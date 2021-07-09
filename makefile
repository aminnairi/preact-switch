.PHONY: install test build dev pack

DOCKER_COMPOSE_RUN_OPTIONS=--rm

ifeq (${CI},true)
	DOCKER_COMPOSE_RUN_OPTIONS=--rm --user root -T
endif

YARN_OPTIONS=--strict-semver --ignore-scripts --ignore-optional --emoji true

install:
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) yarn $(YARN_OPTIONS) install

dev:
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) --publish 3000:3000 yarn $(YARN_OPTIONS) dev --host

test:
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) yarn $(YARN_OPTIONS) test

build:
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) yarn $(YARN_OPTIONS) build

preview:
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) npm pack --dry-run
