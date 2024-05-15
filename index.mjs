import express from "express";
// Creating a server
  let server = express();
  let port = 4000;

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

// using morgan
function requestLogger(req, res, next){
  console.log('middleware is called!');

  // returning control to next middleware
    next();
}

server.get('/products', (req, res)=>{

  res.json(products);
})

server.use(requestLogger);

// Listening 
  server.listen(port, (req, res)=>{
    console.log(`Server is running at port ${port}`);
  });