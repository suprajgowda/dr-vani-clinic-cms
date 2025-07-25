// /schemas/faqs.ts

import {defineType} from 'sanity'

export default defineType({
  name: 'faqsPage',
  title: 'FAQs Page',
  type: 'document',
  fields: [
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Frequently Asked Questions',
    },
    {
      name: 'faqs',
      title: 'FAQs List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
})
