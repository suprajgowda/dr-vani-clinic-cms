import {defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    // SECTION 1 – Hero Section
    {
      name: 'scrollingBanner',
      title: 'Website Scrolling Banner',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'bannerImage',
              title: 'Banner Image',
              type: 'image',
              options: {hotspot: true},
            },
            {
              name: 'bannerTitle',
              title: 'Banner Title',
              type: 'string',
            },
            {
              name: 'bannerDescription',
              title: 'Banner Description',
              type: 'string',
            },
          ],
        },
      ],
    },

    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      name: 'sectionDescription',
      title: 'About Description / Quote',
      type: 'text',
    },

    // SECTION 4 – Medical Services
    {
      name: 'medicalServicesTitle',
      title: 'Medical Services Title',
      type: 'string',
    },
    {
      name: 'medicalServicesDescription',
      title: 'Medical Services Description',
      type: 'text',
    },
    {
      name: 'medicalServicesList',
      title: 'Medical Services List',
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
              name: 'serviceTitle',
              title: 'Service Title',
              type: 'string',
            },
            {
              name: 'serviceDescription',
              title: 'Service Description',
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
