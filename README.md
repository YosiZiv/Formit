# Formit
Formit app let user create their own forms,
# Project Title

Project  for Wix 

## Getting Started

  cd client &&
  npm install
  cd server &&
  npm install

### Prerequisites
this Nodejs appication require a 
env variables as 
MONGO_URI = mongodb connection
SECRET = randome string for jwt to use
TOKEN_EXPIRES = '7d' example TTL for token
```
Give examples
```

### App dependencies

Backend: 
bcryptjs(for hash password) body-parse (data middleware) chalk(for logging) cors(prevent cors happend) 
dotenv(parse .env file) express(server) helmet(server securty) jsonwebtoken(server securty) 
mongoose(database connection modles etc...) morgan(logging) validator(server seurty)

Frontend: 
Create React App boundle Axios(Http request) redux(state managment) react-redux(connection store to react)

Work Flow: 
start planning app data modals connecting relationsip and prepering db indexing.

Application architecture
a single monolith server(Nodejs express server). 
the server host the web application and responsable for the application rest API
1 Cloud Db MongoDB Service who our single server talk

Techologies architecture
Web application writting in html css3 javascript with React Liberary
Backend application writting in nodejs with express liberary

IMPORTENT
this application developet a few days ago and not yet stable or designed.
please report me for any bugs found.
