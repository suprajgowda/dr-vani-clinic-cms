import {defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'About Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'profileImage',
      title: 'Doctor Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
})
