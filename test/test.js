const { satisfyApiSpec } = require("./common");

// Set up Chai
const path = require("path");
const chai = require("chai");
const chaiResponseValidator = require("chai-openapi-response-validator");
chai.use(chaiResponseValidator(path.resolve("dist/openapi.yaml")));

// Import APIs
const auth = require("./api/auth");
const files = require("./api/files");
const friends = require("./api/friends");
const users = require("./api/users");
const system = require("./api/system");
const worlds = require("./api/worlds");

describe("Testing Authentication API", () => {
    auth();
});

describe("Testing System API", () => {
    system();
});

describe("Testing Files API", () => {
    // "You can't upload files right now"
    // files();
});

describe("Testing Users API", () => {
    users();
});

describe("Testing Friends API", () => {
    friends();
});

describe("Testing Worlds API", () => {
    worlds();
});

describe("Finishing up...", () => {
    describe("Logout", () => {
        satisfyApiSpec("PUT", "/logout");
    });
});