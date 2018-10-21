// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require("dotenv").config();

// Next app
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

// Require keystone
const keystone = require("keystone");

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

const port = process.env.PORT;

keystone.init({
	port,
	name: "Flightless Nerd",
	brand: "Flightless Nerd",
	"auto update": true,
	"session store": "mongo",
	auth: true,
	"user model": "User",
	mongo: process.env.MONGO_URI || "mongodb://localhost:27017"
});

keystone.set('cors allow origin', true);
keystone.set('cors allow methods', true);
keystone.set('cors allow headers', true);

// Load your project's Models
keystone.import("models");

// Start Next app
app.prepare().then(() => {

	// Load your project's Routes
	keystone.set("routes", require("./routes")(app));

	// Configure the navigation bar in Keystone's Admin UI
	keystone.set("nav", {
		posts: ["posts", "post-categories"],
		authors: "authors",
		users: "users"
	});

	// Cloudinary config
	// keystone.set("cloudinary config", process.env.CLOUDINARY_URL);

	keystone.start();
});
