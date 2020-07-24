NPM?=$(shell which npm)
setup:
	$(NPM) i typescript
	$(NPM) i express @types/express
	$(NPM) i routing-controllers reflect-metadata 
	$(NPM) i body-parser @types/body-parser
	$(NPM) i multer @types/multer
	$(NPM) i mysql2 types/mysql2
	$(NPM) i ts-node ts-node-dev 
	$(NPM) i class-transformer class-validator
server:
	$(NPM) run server

