# Cincinnati's Best Fantasy Football
### cloud-computing-midterm
Cloud Computing Midterm Assignment - Fantasy Football Web App hosted on Azure


# How to run for development
### Start the development NodeJS server
1. Start in the base directory `cloud-computing-midterm`
2. Go into the server directory - `cd project/server`
3. Run `npm install` to install the npm packages
4. Run `npm run dev` to start the development server on `localhost:8080`

### Start the development React app
1. Start in the base directory `cloud-computing-midterm`
2. Go into the client directory - `cd project/client`
3. Run `npm install` to install the npm packages
4. Run `npm start` to start the development app on `localhost:3000`

### How to develop
- Open `localhost:3000` in your browser
- Everytime you make a change to any files under `client` and save, the React app will automatically reload
- Everytime you make a change to any files under `server` and save, the NodeJS server will automatically reload
- The development React app automatically redirects HTTP calls to the proxy address of `localhost:8080`, which is the development NodeJS server, so you'll need the server running to make HTTP calls from the React app
