 const express = require('express');
 const dotenv = require('dotenv');
   
   // Import routes
   const productRoutes = require('./routes/producto');
   const clientRoutes = require('./routes/clients');
   const salesRoutes = require('./routes/sales');
   //const branchRoutes = require('./routes/branches');
   
   dotenv.config();
   
   const app = express();
  
   app.use(express.json());
   
   
   app.use('/producto', productRoutes);
   app.use('/clients', clientRoutes);
   app.use('/sales', salesRoutes);
   //app.use('/branches', branchRoutes);

   module.exports = app;