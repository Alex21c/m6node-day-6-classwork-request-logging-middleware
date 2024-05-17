import express from "express";
import morgan from 'morgan';

// Creating a server
  let server = express();
  let port = 4000;
  
// allow me to read req body data
  server.use(express.json());

// Sample products
  let products = {
    'Gold': "MMTC PAP 999.9 fine Gold (10gm)",
    'Silver': "MMTC PAP 999.9 fine Gold (250gm)",
    "TermInsurance": "LIC Term Insurance",
    "EmergencyFund": "₹50 Lakhs"
  }

// i need to develop a middleware that will capture  essential information such as the
// +  request method,
// +  URL,
// +  IP address, and
// +  timestamps
/*
// Assignment Steps:Setup and Initialization: Students will initialize a new Node.js project and install the necessary dependencies, including Express.

Middleware Development: Using Express, students will design a middleware function called requestLogger to capture and log details about incoming requests. They can choose to implement basic logging using console.log or leverage libraries like Morgan for advanced logging features.

Logging Details: Within the requestLogger middleware, students will include logic to capture essential information such as the request method, URL, IP address, and timestamps.Global Middleware Inclusion: Students will include the requestLogger middleware as a global middleware function in their Express application to log all incoming requests automatically.

Optional: 

Logging Levels: For additional complexity, students can explore creating separate middleware functions for different logging levels (e.g., info, debug) to control the verbosity of their logs based on the application's requirements.Testing and Documentation: Students will thoroughly test their request logging middleware by making various requests to their Express application and examining the generated logs. They will document their code and provide explanations for each component and any encountered challenges during development.
*/



// using morgan
// function requestLogger(req, res, next){
//   console.log('middleware is called!');

//   // returning control to next middleware
//     next();
// }

server.use(morgan(':method :url :remote-addr :date[clf]'));

server.get('/', (req, res)=>{
  res.end('Logging using Morgan Middleware!')
})


server.get('/products', (req, res)=>{
  res.json(products);
})

server.post('/add-new-product', (req, res)=>{
  let {productName, description} = req.body;
  res.end(`product: "${productName}" shall be added after approval!`);
})

server.post('/sign-in', (req, res)=>{
  let {email, password} = req.body;
  res.end(`okay, let me write sign-in logic before!`);
})


// server.use(requestLogger);

// Listening 
  server.listen(port, (req, res)=>{
    console.log(`Server is running at http://localhost:${port}`);
  });