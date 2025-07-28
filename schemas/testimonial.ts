import {defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name (optional)',
      type: 'string',
      description: 'Name of the person giving the testimonial (can be Anonymous)',
    },
    {
      name: 'content',
      title: 'Testimonial Content',
      type: 'text',
      rows: 10,
      validation: (Rule) => Rule.required().min(20),
    },
    {
      name: 'date',
      title: 'Date Submitted',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'approved',
      title: 'Approved for Display',
      type: 'boolean',
      initialValue: false,
    },
  ],
})
