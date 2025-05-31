// sanity/schema/gallery.ts

import {defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Gallery Title',
      type: 'string',
      description: 'Optional title for the gallery page',
    },
    {
      name: 'description',
      title: 'Gallery Description',
      type: 'text',
      description: 'Optional short description for the gallery page',
    },
    {
      name: 'albums',
      title: 'Albums',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'albumTitle',
              title: 'Album Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              options: {
                source: 'albumTitle',
                maxLength: 96,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'albumDescription',
              title: 'Album Description (Optional)',
              type: 'text',
            },
            {
              name: 'photos',
              title: 'Photos',
              type: 'array',
              of: [
                {
                  type: 'image',
                  options: {hotspot: true},
                },
              ],
              validation: (Rule) => Rule.required().min(1),
            },
          ],
        },
      ],
    },
  ],
})
