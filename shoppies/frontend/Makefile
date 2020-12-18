.DEFAULT_GOAL := help
.PHONY: help run

help: ## show this help
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[33m%-20s\033[0m %s\n", $$1, $$2}'

run: ## build and run shoppies frontend
	docker build -t shoppies_frontend . && docker run -it --rm -p 3000:3000 shoppies_frontend
