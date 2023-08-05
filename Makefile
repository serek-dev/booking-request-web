.PHONY: help

docker-compose=docker-compose -f docker-compose.yml

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

start: stop build up copy_vendor _finish ## Starts containers with build
fast: stop up _finish ## Attempts to start existing containers

up:
	$(docker-compose) run --rm start_dependencies
	$(docker-compose) up -d

build:
	$(docker-compose) build

stop: ## Stops containers and removes network
	$(docker-compose) down -v --remove-orphans
	docker network prune -f

tests_unit: ## Executes unit tests in the way like CI&CD should do it
	$(docker-compose) run --rm client_tests_unit

tests_unit_watch: ## Executes unit tests with volume binding and watch mode (needs `tests_unit` command to be executed firstly)
	$(docker-compose) run --rm client_tests_unit ng test --watch

_finish:
	@echo "----------------------------------------------------------------------------"
	@echo "Client is running in watch mode with data mock under: http://localhost:4200/"
	@echo ""
	@echo "Environment (Angular\`s configuration) = test"
	@echo "----------------------------------------------------------------------------"

copy_vendor:
	sudo docker cp $$(docker-compose ps -q client_dev):/app/node_modules .
