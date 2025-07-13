import {defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Us Page',
  type: 'document',
  fields: [
    // Section 1 - Page Title + Banner
    {
      name: 'section1Title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'section1BannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {hotspot: true},
    },

    // Section 2 - About Dr. Vani
    {
      name: 'aboutDrVanititle',
      title: 'About Dr. Vani - Section Title',
      type: 'string',
    },
    {
      name: 'aboutDrVaniCompleteDescription',
      title: 'About Dr. Vani - Detailed Description',
      type: 'text',
    },

    // Section 3 - 3 Info Blocks (title + description)
    {
      name: 'highlightedFacts',
      title: 'Highlighted Facts (max 3)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'description', title: 'Description', type: 'text'},
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
    },

    // Section 4 - Why Dr. Vani
    {
      name: 'whyDrVaniTitle',
      title: 'Why Dr. Vani - Title',
      type: 'string',
    },
    {
      name: 'whyDrVaniDescription',
      title: 'Why Dr. Vani - Description',
      type: 'text',
    },

    // Section 5 - Awards & Recognition
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
      name: 'awards',
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
            {name: 'awardTitle', title: 'Award Title', type: 'string'},
          ],
        },
      ],
    },

    // New Sections With Optional Images
    {
      name: 'educationAndTraining',
      title: 'Education & Training',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'image', title: 'Image (Optional)', type: 'image', options: {hotspot: true}},
          ],
        },
      ],
    },
    {
      name: 'expertise',
      title: 'Areas of Expertise',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'image', title: 'Image (Optional)', type: 'image', options: {hotspot: true}},
          ],
        },
      ],
    },
    {
      name: 'experience',
      title: 'Professional Experience',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'image', title: 'Image (Optional)', type: 'image', options: {hotspot: true}},
          ],
        },
      ],
    },
    {
      name: 'memberships',
      title: 'Memberships & Affiliations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'image', title: 'Image (Optional)', type: 'image', options: {hotspot: true}},
          ],
        },
      ],
    },
    {
      name: 'personalInterests',
      title: 'Hobbies & Interests',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'image', title: 'Image (Optional)', type: 'image', options: {hotspot: true}},
          ],
        },
      ],
    },
  ],
})
