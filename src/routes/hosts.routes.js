const express = require("express");
const HostsController = require("../controllers/hosts.controller");
const hostRouter = express.Router();

//* as a user, I want to be able to see all hosts available.

hostRouter.get("/", HostsController.getAllHosts);

//* as a user, I want to be able to see an host by its id on the url.

hostRouter.get("/:id", HostsController.getHostsById);

//* as a user, I want to be able to register as an host.

// hostRouter.post("/", HostsController.createHost);

//* as a user, I want to be able to edit my host account.

// hostRouter.put("/:id", HostsController.updateHost);

//* as a user, I want to be able to delete my host account.

// hostRouter.delete("/:id", HostsController.deleteHost);

module.exports = hostRouter;
