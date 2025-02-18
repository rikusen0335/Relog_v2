import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { slugField } from '@/fields/slug'

export const Tag: CollectionConfig = {
  slug: 'tag',
  labels: {
    plural: {
      en: 'Tags',
      ja: 'タグ',
    },
    singular: {
      en: 'Tag',
      ja: 'タグ',
    },
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: {
        en: 'Title',
        ja: 'タイトル',
      },
      type: 'text',
      required: true,
    },
    ...slugField(),
  ],
}
