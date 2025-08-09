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
      name: 'photo',
      title: 'User Photo',
      type: 'image',
      options: {hotspot: true},
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
      name: 'video',
      title: 'Testimonial Video (optional)',
      type: 'file',
      options: {
        accept: 'video/*', // restricts to video files
      },
      description: 'Upload a video testimonial (optional)',
    },
    {
      name: 'approved',
      title: 'Approved for Display',
      type: 'boolean',
      initialValue: false,
    },
  ],
})
