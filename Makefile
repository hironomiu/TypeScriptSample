NPM?=$(shell which npm)
CURL?=$(shell which curl)
setup:
	$(NPM) i
serve:
	$(NPM) run serve
# curl
curl-get:
	$(CURL) http://localhost:5050
curl-post:
	$(CURL) -H "Origin: http://localhost:3000" --head http://localhost:5050

