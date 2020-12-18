.DEFAULT_GOAL := help
.PHONY: help run run-clean

help: ## show this help
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[33m%-20s\033[0m %s\n", $$1, $$2}'

run: ## start the dev docker-compose stack
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

run-clean: ## start the dev docker-compose stack while rebuilding
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build --force-recreate --no-deps
