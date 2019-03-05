var keystone = require("keystone");

/**
 * PostTopic Model
 * ==================
 */

var PostTopic = new keystone.List("PostTopic", {
	autokey: { from: "name", path: "key", unique: true }
});

PostTopic.add({
	name: { type: String, required: true }
});

PostTopic.relationship({ ref: "Post", path: "posts", refPath: "topic" });

PostTopic.register();
