# Javascript-June-23
June 2023 Javascript Stack
# Welcome to the JavaScript (MERN) stack with Ruben & Ronnie

## Repo Instructions
1. Clone the repo to your computer.
2. Pull the repo when you want to get the latest update of the code.
3. Daily Algorithm starter code.

## Commands
## Frontend Dependencies install(client)
```
npm install react-bootstrap bootstrap
npm install axios
```
### App.js imports
```
import "bootstrap/dist/css/bootstrap.min.css";
```

## Backend Dependencies install(server)
```

```
## Onetime install(server)
```
npm install -g nodemon (Windows)
sudo npm install -g nodemon (Mac)
```

## Computer Rogue Port Kill Instructions

## To kill a running port
1. run the first command to get the PID of the port
2. kill the port with the PID. 

#### Mac/Linux
 to getting the background process and find the PID
```
lsof -i:8000 
```

To kill the PID
```
kill -9 <PID>
```

#### Windows
 to getting the background process and find the PID
```
netstat -ano | findstr :8000
```
To kill the PID
```
taskkill /PID <PID> /F
```
