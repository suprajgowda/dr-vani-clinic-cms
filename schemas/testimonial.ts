import {defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'photo',
      title: 'User Photo',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'content',
      title: 'Testimonial Content',
      type: 'text',
    },
    {
      name: 'rating',
      title: 'Star Rating (1-5)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
    },
  ],
})
