var keystone = require("keystone");
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Post = new keystone.List("Post", {
	map: { name: "title" },
	autokey: { path: "slug", from: "title", unique: true }
});

Post.add({
	title: { type: String, required: true },
	type: {
		type: Types.Select,
		options: "podcast, article",
		default: "article",
		index: true
	},
	state: {
		type: Types.Select,
		options: "draft, published, archived",
		default: "draft",
		index: true
	},
	author: {
		type: Types.Relationship,
		ref: "Author",
		index: true,
		dependsOn: { type: ["article"] }
	},
	hosts: {
		type: Types.Relationship,
		ref: "Author",
		dependsOn: { type: ["podcast"] },
		many: true
	},
	epNumber: {
		type: Number,
		dependsOn: { type: ["podcast"] },
		label: "Episode Number"
	},
	audioUrl: {
		type: String,
		dependsOn: { type: ["podcast"] },
		label: "Audio Source"
	},
	publishedDate: {
		type: Types.Datetime,
		index: true,
		dependsOn: { state: ["published"] }
	},
	modifiedDate: { type: Types.Datetime, hidden: true },
	image: {
		type: Types.CloudinaryImage,
		folder: "flightlessnerd",
		autoCleanup: true,
		select: true,
		selectPrefix: "flightlessnerd",
		dependsOn: { type: ["article"] }
	},
	content: {
		brief: { type: Types.Markdown, height: 90 },
		extended: {
			type: Types.Markdown,
			height: 400,
			sanitizeOptions: {
				allowedTags: false,
				allowedAttributes: false,
				allowedIframeHostnames: ["www.youtube.com"]
			}
		}
	},
	meta: {
		requiresTwitter: { type: Boolean, label: "Contains Twitter Embeds" }
	},
	categories: { type: Types.Relationship, ref: "PostCategory", many: true },
	topic: { type: Types.Relationship, ref: "PostTopic", many: false },
	isFeatured: { type: Boolean, label: "Featured" },
	seo: {
		description: { type: Types.Textarea, height: 90, label: "SEO Description" }
	}
});

Post.schema.virtual("content.full").get(function() {
	return this.content.extended || this.content.brief;
});

Post.schema.pre("save", function(next) {
	if (
		this.isModified("state") &&
		this.state === "published" &&
		!this.publishedDate
	) {
		this.publishedDate = new Date();
	}
	this.modifiedDate = new Date();
	next();
});

Post.defaultColumns =
	"title, type|10%, state|10%, isFeatured|10%, author|20%, publishedDate|20%";
Post.defaultSort = "-publishedDate";
Post.register();
