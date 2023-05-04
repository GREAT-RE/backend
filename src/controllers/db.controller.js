const Company = require("../models/db.model")
const hosts = require("../../sql/airbnb_data_host_table.json")
const listings = require("../../sql/airbnb_data_listing_table.json")

const createCompany = (req,res) =>{
    hosts.map(host =>Company.createCompany(host))
    console.log("Company table with data")
}

const createListing = (req,res) =>{
    listings.map(listing =>Company.createListing(listing))
    console.log("Listing table with data")
}


module.exports = {
    createCompany,
    createListing
}