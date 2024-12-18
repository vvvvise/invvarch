checkout:
	@git checkout package.json
	@git checkout yarn.lock

# --
# 1. INSTALL
# ---------

berry:
	@corepack enable
	@yarn init -2 -w
	@yarn set version stable
	@make checkout
	@echo '💬 [APP] Initialized yarn@berry ✨'

init:
	@yarn unlink && yarn link && yarn
	@echo '💬 [APP] Workpaces Initialized ✨'

# Debian 11+ / Ubuntu 22.04+
doppler-apt:
	@sudo apt-get update && sudo apt-get install -y apt-transport-https ca-certificates curl gnupg
	@curl -sLf --retry 3 --tlsv1.2 --proto "=https" 'https://packages.doppler.com/public/cli/gpg.DE2A7741A397C129.key' | sudo gpg --dearmor -o /usr/share/keyrings/doppler-archive-keyring.gpg
	@echo "deb [signed-by=/usr/share/keyrings/doppler-archive-keyring.gpg] https://packages.doppler.com/public/cli/deb/debian any-version main" | sudo tee /etc/apt/sources.list.d/doppler-cli.list
	@sudo apt-get update && sudo apt-get install doppler
	@alias doppler="/usr/bin/doppker"
	@sudo doppler login
	@echo '💬 [APP] Installed DopplerCLI ✨'

# Mac
doppler-mac:
	@brew install dopplerhq/cli/doppler
	@doppker login
	@echo '💬 [APP] Installed DopplerCLI ✨'

setup:
	@sudo doppler setup
	@cd apps/web && doppler secrets download --no-file --format env > .env
	@cd apps/schema-editor && cp dotenv.dev .env
	@echo '💬 [APP] Finished Workspaces Setups ✨'

env:
	@cd apps/web && doppler secrets download --no-file --format env > .env
	@cd apps/schema-editor && cp dotenv.dev .env
	@echo '💬 [APP] Generated Environments ✨'

## this short hand
workspace:
	@make berry
	@make init
	@make setup
	@make env

# --
# 2. BUILD
# ---------
init-prisma:
	@yarn schema-editor prisma:init
	@echo '💬 [PRISMA] Generated apps/schema-editor⚡️'

generate:
	@yarn schema-editor prisma:build
	@echo '💬 [PRISMA] Generated apps/schema-editor⚡️'

migrate:
	@yarn schema-editor prisma:migrate
	@echo '💬 [PRISMA] Migrated apps/schema-editor⚡️'

## this short hand
prisma:
	@yarn schema-editor prisma:generate
	@yarn schema-editor prisma:migrate
	@yarn schema-editor prisma:studio
	@echo '💬 [PRISMA] generated apps/schema-editor⚡️'

# First time commands Seaquense
create:
	@make workspace
	@make prisma

# --
# shell shorthands
# ---------

envthis:
	@head -n 1 ./apps/web/.env

envs:
	@cat ./apps/web/.env
