dc := docker compose -f ./docker/docker-compose.yml

.PHONY: up
up:
  $(dc) up -d --build

.PHONY: down
down:
  $(dc) down

.PHONY: restart
restart:
  $(dc) restart

.PHONY: reup
reup:
  @make down
  @make up

.PHONY: rm
rm:
  $(dc) down --rmi all

.PHONY: logs
logs:
  $(dc) logs -f

.PHONY: nest
nest:
  $(dc) exec nest /bin/sh

.PHONY: next
next:
  $(dc) exec next /bin/sh
