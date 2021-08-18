### Configure and run the app in prod mode
1. Run `mvn install` to build the app
2. Execute in terminal to run the app:  
`docker-compose -f docker-compose.yml up --build -d`  

####Angular UI is available on `localhost:8080`  
####Swagger UI is available on `localhost:8080/swagger-ui.html`  

### Run in dev mode
1. Execute in terminal `docker-compose -f docker-compose.yml up --build -d database` to run postgres ONLY
2. The app is a regular spring boot application, should be run as usual 
3. Navigate in terminal to `/src/frontend` and execute:  
- `npm install`
- `npm run start`
4. UI will be accessible on `localhost:4200`


### Dev Notes
- Angular contains a proxy.conf, allowing to use relative URL paths, without CORS prone  

### "Prod" Notes
- spring contains `docker` profile override docker specific properties from `docker-compose.yml` file
- maven builds both: FE and BE automatically
- maven contains a frontend plugin to:
  - download npm and node
  - execute `npm install` 
  - execute `ng build` commands


Please, let me know if you've more questions about the project
