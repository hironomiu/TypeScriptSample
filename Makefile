NPM?=$(shell which npm)
setup:
	$(NPM) install typescript
	$(NPM) i express @types/express
	$(NPM) i ts-node ts-node-dev 
	$(NPM) i body-parser 
server:
	$(NPM) run server

