-include ./.env

install:
	@echo "Installing"
	@yarn install

hardhat.init:
	@echo "Initializing hardhat project..."
	@yarn hardhat init

lint:
	@echo "Reformatting smart contract..."
	@yarn prettier
	@echo "Linting check smart contract..."
	@solhint "contracts/**/*.sol"

compile:
	@echo "Compiling..."
	@yarn hardhat compile

test.contract:
	@echo "Running tests..."
	@yarn hardhat test

deploy-contract:
	@if [ "$(network)" = "" ]; then \
		echo "Must provide 'network' argument"; \
		exit 1; \
	fi
	@echo "Deploying..."
	@yarn hardhat deploy --network $(network)

deploy-contract.reset:
	@if [ "$(network)" = "" ]; then \
		echo "Must provide 'network' argument"; \
		exit 1; \
	fi
	@echo "Deploying with reset..."
	@yarn hardhat deploy --reset --network $(network)

deploy-contract.local: network=localhost
deploy-contract.local: deploy-contract

deploy-contract.local.reset: network=localhost
deploy-contract.local.reset: deploy-contract.reset

deploy-contract.linea.testnet: network=linea_testnet
deploy-contract.linea.testnet: deploy-contract

deploy-contract.linea.testnet.reset: network=linea_testnet
deploy-contract.linea.testnet.reset: deploy-contract.reset

deploy-contract.polygon_zk.testnet: network=polygon_zk_testnet
deploy-contract.polygon_zk.testnet: deploy-contract

deploy-contract.polygon_zk.testnet.reset: network=polygon_zk_testnet
deploy-contract.polygon_zk.testnet.reset: deploy-contract.reset

run.local-node:
	@echo "Running local node..."
	@yarn hardhat node --no-deploy

sync-laika:
	@if [ "$(contract)" = "" ]; then \
		echo "Must provide 'contract' argument"; \
		exit 1; \
	fi
	@yarn hardhat laika-sync --contract $(contract)
