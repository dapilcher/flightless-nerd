var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Post = new keystone.List('Post', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Post.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'Author', index: true },
	publishedDate: { type: Types.Datetime, index: true, dependsOn: { state: 'published' } },
	modifiedDate: { type: Types.Datetime, hidden: true },
	image: { type: Types.CloudinaryImage, folder: 'flightlessnerd', autoCleanup: true, select: true, selectPrefix: 'flightlessnerd' },
	content: {
		brief: { type: Types.Markdown, height: 90 },
		extended: { type: Types.Markdown, height: 400 },
	},
	categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
	isFeatured: { type: Boolean },
	seo: {
		description: { type: Types.Textarea, height: 90, label: "SEO Description" },
	}
});

Post.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Post.schema.pre('save', function (next) {
	if (this.isModified('state') && (this.state === 'published') && !this.publishedDate) {
		this.publishedDate = new Date();
	}
	this.modifiedDate = new Date();
	next();
});

Post.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Post.defaultSort = '-publishedDate';
Post.register();
