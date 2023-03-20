const Userdata = require("../model/Userdata");

// Get All userdatas
const userdata_all = async (req, res) => {
    try {
        const userdatas = await Userdata.find();
        res.json(userdatas);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single userdata
const userdata_details = async (req, res) => {
    try {
        const userdata = await Userdata.findById(req.params.userdataId);
        res.json(userdata);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New userdata
const userdata_create = async (req, res) => {
    const userdata = new Userdata({
        email: req.body.email,
        password: req.body.password,
        
      });
    
      try {
        const savedUserdata = await userdata.save();
        res.send(savedUserdata);
      } catch (error) {
        res.status(400).send(error);
      }
};

// Update userdata
const userdata_update = async (req, res) => {
    try {
        const userdata = {
          email: req.body.email,
          password: req.body.password,
        };
    
        const updatedUserdata = await Userdata.findByIdAndUpdate(
          { _id: req.params.userdataId },
          userdata
        );
        res.json(updatedUserdata);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete userdata
const userdata_delete = async (req, res) => {
    try {
        const removeUserdata = await Userdata.findByIdAndDelete(req.params.userdataId);
        res.json(removeUserdata);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    userdata_all, 
    userdata_details, 
    userdata_create, 
    userdata_update, 
    userdata_delete
  }