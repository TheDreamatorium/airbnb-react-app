start:
	docker run -p 3000:3000 --name airbnb-app -v "${PWD}/src:/app/src" -v "${PWD}/public:/app/public" airbnb-app:latest

stop:
	docker stop airbnb-app

remove:
	docker container rm airbnb-app