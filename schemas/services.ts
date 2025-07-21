import {defineType} from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services Page',
  type: 'document',
  fields: [
    // Hero Section
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
    },
    {
      name: 'heroBackgroundImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {hotspot: true},
    },

    // Services Grid
    {
      name: 'servicesList',
      title: 'Services List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Service Image',
              type: 'image',
              options: {hotspot: true},
            },
            {
              name: 'title',
              title: 'Service Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Short Description',
              type: 'text',
            },
            {
              name: 'subServices',
              title: 'Sub Services',
              type: 'array',
              of: [{type: 'string'}],
            },
          ],
        },
      ],
    },

    // Why Choose Us Section
    {
      name: 'whyTitle',
      title: 'Why Choose Us Title',
      type: 'string',
    },
    {
      name: 'whyPoints',
      title: 'Key Highlights',
      type: 'array',
      of: [{type: 'string'}],
    },

    // CTA Section
    {
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
    },
    {
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
    },
    {
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'url',
    },

    // Optional: FAQ Section
    {
      name: 'faqs',
      title: 'FAQ Entries',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'question', title: 'Question', type: 'string'},
            {name: 'answer', title: 'Answer', type: 'text'},
          ],
        },
      ],
    },
  ],
})
