import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    plural: {
      en: 'Users',
      ja: 'ユーザー',
    },
    singular: {
      en: 'User',
      ja: 'ユーザー',
    },
  },
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['icon', 'name', 'email'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'icon',
      label: {
        en: 'Icon',
        ja: 'アイコン'
      },
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'name',
      label: {
        en: 'Name',
        ja: 'ユーザー名',
      },
      type: 'text',
    },
  ],
  timestamps: true,
}
