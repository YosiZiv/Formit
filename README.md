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
### App dependencies

Backend: 
bcryptjs (for hash password) body-parse (data middleware) 
chalk(for logging) cors(prevent cors happend) 
dotenv(parse .env file) 
express(server) helmet(server securty) 
jsonwebtoken(server securty) 
mongoose(database connection modles etc...) 
morgan(logging) validator(server seurty)

Frontend: 
Create React App boundle Axios(Http request) 
redux(state managment) react-redux(connection store to react)
bootstrap(ui)

database
mongodb cloud service

### Work Flow: 
start planning app data modals connecting relationsip 
and prepering db indexing.
create reuseble ui component for the web app to use.
backend api insprtion by RESRT model

### Application architecture
a single monolith server(Nodejs express server). 
the server host the web application and responsable 
for the application rest API
1 Cloud Db MongoDB Service

### Techologies architecture
Web application writting in html css3 javascript with React framework
Backend application writting in nodejs with express framework

### WORK CONCLUSIONS:
planning future for the application side, i decided to 
add as much as simple and secured authentication.
this was required for separations and identifications of user forms.
also i decided to use redux state mangment.
react hook state will work perfect for this small app, but i want to add more complex.
i find 50% of the project weight go to redux, not for project core functionlties. 
this leave to resullt that delay the product deliverd and quality. 

### Feature Updates
1. improve user form ui.
2. add opt for user add validations to is form 
