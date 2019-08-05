all: help

help:
	@echo ""
	@echo "-- Help Menu"
	@echo ""   1. make install       - install the scripts in /usr/local/bin/

install: usrlocalbin

usrlocalbin:
	install --mode=0755 vv /usr/local/bin/vv

playbook:
	ansible-playbook vv.yaml

play: playbook

vanity:
	curl -i https://git.io -F "url=https://raw.githubusercontent.com/joshuacox/vv/master/bootstrapvv.sh" -F "code=vvinstall"
