import {defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    // SECTION 1 – Hero Section
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
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string',
    },
    {
      name: 'ctaLink',
      title: 'Call to Action Link',
      type: 'url',
    },

    // SECTION 2 – Services
    {
      name: 'services',
      title: 'Services Section',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'serviceImage',
              title: 'Service Image',
              type: 'image',
              options: {hotspot: true},
            },
            {
              name: 'serviceText',
              title: 'Service Text',
              type: 'string',
            },
            {
              name: 'serviceDescription',
              title: 'Service Description',
              type: 'text',
            },
            {
              name: 'blogLink',
              title: 'Link to Blog',
              type: 'reference',
              to: [{type: 'blog'}],
            },
          ],
        },
      ],
    },

    // SECTION 3 – About Dr. Vani
    {
      name: 'sectionImage',
      title: 'About Section Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'sectionTitle',
      title: 'About Section Title',
      type: 'string',
    },
    {
      name: 'sectionAchievements',
      title: 'Key Achievements',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'sectionDescription',
      title: 'About Description / Quote',
      type: 'text',
    },

    // SECTION 4 – Awards & Recognition
    {
      name: 'awardsSectionTitle',
      title: 'Awards Section Title',
      type: 'string',
    },
    {
      name: 'awardsSectionDescription',
      title: 'Awards Section Description',
      type: 'text',
    },
    {
      name: 'sectionAwards',
      title: 'Awards List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'awardImage',
              title: 'Award Image',
              type: 'image',
              options: {hotspot: true},
            },
            {
              name: 'awardTitle',
              title: 'Award Title',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'testimonials',
      title: 'Testimonials Section',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'testimonial'}],
        },
      ],
    },
  ],
})
