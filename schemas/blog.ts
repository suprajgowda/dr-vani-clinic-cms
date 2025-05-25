import {defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Post Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'excerpt',
      title: 'Short Description',
      type: 'text',
    },
    {
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
})
