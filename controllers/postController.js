const fs = require("fs");
const path = require("path");
const { log } = require("console");
const { kebabCase } = require("lodash");

// Import data
const posts = require("../db/posts.json");
