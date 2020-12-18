.DEFAULT_GOAL := help
.PHONY: help run run-remote

help: ## show this help
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[33m%-20s\033[0m %s\n", $$1, $$2}'

run: ## build and run shoppies frontend
	docker build -t shoppies_frontend . && docker run -it --rm -p 3000:3000 shoppies_frontend

run-remote: ## pull from remote and run
	docker run -it --rm -p 3000:3000 ghcr.io/gordonpn/shopify_shoppies_frontend:stable
