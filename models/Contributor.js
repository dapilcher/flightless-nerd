var keystone = require('keystone');
var Types = keystone.Field.Types;

var uniqueValidator = require('mongoose-unique-validator');

/**
 * Contributor Model
 * ==========
 */
var Contributor = new keystone.List('Contributor');

Contributor.add({
  name: { type: Types.Name, required: true, unique: true, index: true },
  email: { type: Types.Email, unique: true, displayGravatar: false },
  description: { type: Types.Textarea },
  releases: { type: Types.Textarea, label: "Upcoming Releases" },
  submitDate: { type: Types.Date },
  contacted: { type: Types.Boolean, default: false }
});


/**
 * Relationships
 */
// Contributor.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });

/**
* Plugins
*/
// Contributor.schema.plugin(uniqueValidator);

/**
 * Registration
 */
Contributor.defaultColumns = 'name, email, submitDate|20%, contacted|10%';
Contributor.defaultSort = '-submitDate';
Contributor.register();
