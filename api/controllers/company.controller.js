const db = require("../models");
const Company = db.company;
const Op = db.Sequelize.Op;

// Create a new company
exports.create = (req, res) => {
    const company = {
        company_name: req.body.company_name,
        company_address: req.body.company_address,
        contact_id: req.params.contactId // Use contactId from route params
    };

    Company.create(company)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Company."
            });
        });
};

// Get all companies for a specific contact
exports.findAll = (req, res) => {
    const contactId = req.params.contactId;

    Company.findAll({ where: { contact_id: contactId } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving companies."
            });
        });
};

// Get a single company by ID for a specific contact
exports.findOne = (req, res) => {
    const contactId = req.params.contactId;
    const company_id = req.params.company_id;

    Company.findOne({ where: { company_id: company_id, contact_id: contactId } })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Company with id=${company_id} for contact id=${contactId}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Company with id=" + company_id + " for contact id=" + contactId
            });
        });
};

// Update a company by ID for a specific contact
exports.update = (req, res) => {
    const contactId = req.params.contactId;
    const company_id = req.params.company_id;

    const updatedCompany = {
        company_name: req.body.company_name,
        company_address: req.body.company_address,
        contact_id: contactId // Keep contact_id same as the contact in the route
    };

    Company.update(updatedCompany, {
        where: { company_id: company_id, contact_id: contactId }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Company was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Company with id=${company_id} for contact id=${contactId}. Maybe Company was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Company with id=" + company_id + " for contact id=" + contactId
        });
    });
};

// Delete a company by ID for a specific contact
exports.delete = (req, res) => {
    const contactId = req.params.contactId;
    const company_id = req.params.company_id;

    Company.destroy({
        where: { company_id: company_id, contact_id: contactId }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Company was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Company with id=${company_id} for contact id=${contactId}. Maybe Company was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Company with id=" + company_id + " for contact id=" + contactId
        });
    });
};
