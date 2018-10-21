var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Author Model
 * ==========
 */
var Author = new keystone.List('Author');

Author.add({
  name: { type: Types.Name, required: true, index: true },
  about: { type: Types.Textarea },
  twitterUrl: { type: Types.Url },
  image: { type: Types.CloudinaryImage, folder: 'flightlessnerd/authors', autoCleanup: true, select: true, selectPrefix: 'flightlessnerd/authors' },
});


/**
 * Relationships
 */
Author.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */
Author.defaultColumns = 'name';
Author.register();
