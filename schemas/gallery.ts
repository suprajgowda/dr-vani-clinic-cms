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
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Image Title (Optional)',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Image Description (Optional)',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
})
