const Customer = require("../models/customer");

const fetchAllCustomers = async (req, res) => {
  // 1. Get all customers from DB
  // 2. Send the customers back as a response
  const allCustomers = await Customer.find();
  // --------------------------------(1)
  res.json({ Customer: allCustomers });
  // --------------------------------(2)
};

const fetchCustomer = async (req, res) => {
  // 1. Get id off the url
  // 2. Find the customer assoc. w/ ID
  // 3.Send response with that customer as the payload

  const customerId = req.params.id;
  // --------------------------------(1)
  const findCustomer = await Customer.findById(customerId);
  // --------------------------------(2)
  res.json({ Customer: findCustomer });
  // --------------------------------(3)
};

const createCustomer = async (req, res) => {
  // 1. Get data from req.body
  // 2.Create customer
  // 3. Respond with new copy of customer


  console.log(`BODY: ${req.body}`);
  const name = req.body.name;
  const industry = req.body.industry;
  // const {title,body} = req.body
  // --------------------------------(1)
  const newCustomer = await Customer.create({
    name: name, 
    industry: industry
  });
  // --------------------------------(2)
  res.json({ Customer: newCustomer });
  // --------------------------------(3)
};

const updateCustomer = async (req, res) => {
  // 1. Get id off the url
  // 2. Get the data off the id
  // 3. Find and Update Customer
  // 4. Retrieve updatedCustomer and send it as a response
  const CustomerId = req.params.id;
  // --------------------------------(1)
  const { name, industry } = req.body;
  // --------------------------------(2)
  const customer = await customer.findByIdAndUpdate(customerId, {
    name: name, 
    industry: industry,
  });
  // --------------------------------(2)
  const updatedCustomer = await Customer.findById(customerId);
  res.json({ Customer: updatedCustomer });
};
const deleteCustomer = async(req, res) => {
    // 1. Get the id off the url
    // 2. Delete the record
    // 3. Send Response
    const customerId = req.params.id
  // --------------------------------(1)
  await Customer.deleteOne({
    id: customerId
  })
    // --------------------------------(2)
  res.json({success: "Customer record has been deleted successfully"})
}

module.exports = {
    fetchAllCustomers,
    fetchCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer
}