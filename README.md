#### Docker
Works:

```shell script
cd ./server
docker build -f Dockerfile.dev -t docker-temp .
docker run -e PORT=3000 -p 3000:3000 docker-temp
curl localhost:3000 -s
```

#### docker-compose
Doesn't work on Windows:
```shell script
docker-compose up --build
```

#### docker-compose + external node_modules
Works:
```shell script
cd ./server
npm i
cd ../
docker-compose up --build
curl localhost:3000 -s
```