const Hosts = require("../models/hosts.model");

const getAllHosts = (req, res) => {
  //* get all hosts from DB
  Hosts.getAll()
    .then((results) => res.status(200).json(results))
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving hosts from database");
    });
};

const getHostsById = (req, res) => {
  const { id } = req.params;
  Hosts.getById(id)
    .then((results) => {
      if (results.length) {
        res.status(200).send(results);
      } else {
        res.status(404).send(`No hosts found with id: ${id}`);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving id from database");
    });
};

const createHost = (req, res) => {
  Hosts.create(req.body)
    .then((result) => {
      const createdHost = {
        id: result.insertId,
        host_id: req.body.host_id,
        nif: req.body.nif,
        number_of_reviews: req.body.number_of_reviews,
        number_of_reviews_l30d: req.body.number_of_reviews_l30d,
        host_verifications: req.body.host_verifications,
        address: req.body.address,
        postalcode: req.body.postalcode,
        city: req.body.city,
        country: req.body.country,
      };

      res.status(201).json(createdHost);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving hosts from database");
    });
};

const updateHost = (req, res) => {
  const { id } = req.params;
  const body = req.body;
  Hosts.edit(id, body)
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving hosts from database");
    });
};

const deleteHost = (req, res) => {
  const { id } = req.params;
  Hosts.deleteHos(id)
    .then((results) => {
      if (results.affectedRows) {
        res.status(202).send(`The host with id ${id} has been deleted`);
      } else {
        res.status(404).send(`Host with id ${id} was not found`);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving hosts from database");
    });
};

module.exports = {
  getAllHosts,
  getHostsById,
  createHost,
  updateHost,
  deleteHost,
};
