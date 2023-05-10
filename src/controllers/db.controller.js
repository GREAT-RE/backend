const Company = require("../models/db.model");
const hosts = require("../../sql/airbnb_data_host_table.json");
const listings = require("../../sql/listings_with_distance.json");
const universities = require("../../sql/universities.json");

const createCompany = (req, res) => {
  hosts.map((host) => Company.createCompany(host));
  res.status(200).send("Company table with data");
};

const createListing = (req, res) => {
  listings.map((listing) => Company.createListing(listing));
  res.status(200).send("Listing table with data");
};

const createUniversities = (req, res) => {
  universities.map((university) => Company.createUniversity(university));
  res.status(200).send("Universities table with data");
};

module.exports = {
  createCompany,
  createListing,
  createUniversities
};
