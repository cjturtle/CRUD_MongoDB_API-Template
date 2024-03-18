const APIMethod = require("../models/dataModel");
const mongoose = require("mongoose");

// get all APIMethods
const getAPIMethods = async (req, res) => {
  const APIMethods = await APIMethod.find({}).sort({ createdAt: -1 });

  res.status(200).json(APIMethods);
};

// get a single APIMethod
const getAPIMethod = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such APIMethod" });
  }

  const APIMethods = await APIMethod.findById(id);

  if (!APIMethods) {
    return res.status(404).json({ error: "No such APIMethod" });
  }

  res.status(200).json(APIMethods);
};

// create a new APIMethod
const createAPIMethod = async (req, res) => {
  const { fullname, contact, gender } = req.body;

  // add to the database
  try {
    const APIMethods = await APIMethod.create({ fullname, contact, gender });
    res.status(200).json(APIMethods);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a APIMethod
const deleteAPIMethod = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such APIMethod" });
  }

  const APIMethods = await APIMethod.findOneAndDelete({ _id: id });

  if (!APIMethods) {
    return res.status(400).json({ error: "No such APIMethod" });
  }

  res.status(200).json(APIMethods);
};

// update a APIMethod
const updateAPIMethod = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such APIMethod" });
  }

  const APIMethods = await APIMethod.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!APIMethods) {
    return res.status(400).json({ error: "No such APIMethod" });
  }

  res.status(200).json(APIMethods);
};

module.exports = {
  getAPIMethods,
  getAPIMethod,
  createAPIMethod,
  deleteAPIMethod,
  updateAPIMethod,
};
