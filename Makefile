.PHONY: help
help: ## Help
	@echo 'Usage:'
	@echo "  make [command]"
	@echo 'Commands:'
	@grep -E '^[a-zA-Z_0-9%-]+:.*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?##"}; {printf "  \033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: init
init: ## Prepare Environment
	npm install

.PHONY: run
run: ## Run server
	npm start

.PHONY: deploy-github-pages
deploy-github-pages: ## Run server
	ng build --base-href /rock-paper-scissors-game/
	cp docs/index.html docs/404.html

# Docker (angular-app)

.PHONY: dk-up
dk-up: ## Docker Up
	docker compose up --build -d

.PHONY: dk-down
dk-down: ## Docker Down
	docker compose down

.PHONY: dk-tail-%
dk-tail-%: ## Docker tail
	docker compose logs ${@:dk-tail-%=%} -f

.PHONY: dk-reload-%
dk-reload-%: ## Docker Reload
	make dk-down-${@:dk-reload-%=%}
	make dk-up-${@:dk-reload-%=%}

.PHONY: dk-up-%
dk-up-%: ## Docker Up
	docker compose up --build -d ${@:dk-up-%=%}

.PHONY: dk-down-%
dk-down-%: ## Docker Down
	docker compose down ${@:dk-down-%=%}

.PHONY: dk-exec-%
dk-exec-%: ## docker compose exec bash
	docker compose exec ${@:dk-exec-%=%} bash