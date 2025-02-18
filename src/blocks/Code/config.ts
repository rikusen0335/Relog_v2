import type { Block } from 'payload'

export const Code: Block = {
  slug: 'code',
  interfaceName: 'CodeBlock',
  fields: [
    {
      name: 'language',
      label: {
        en: 'Language',
        ja: '言語',
      },
      type: 'select',
      defaultValue: 'typescript',
      options: [
        {
          label: 'TypeScript',
          value: 'typescript',
        },
        {
          label: 'JavaScript',
          value: 'javascript',
        },
        {
          label: 'CSS',
          value: 'css',
        },
      ],
    },
    {
      name: 'filename',
      label: {
        en: 'Filename',
        ja: 'ファイル名',
      },
      type: 'text'
    },
    {
      name: 'code',
      type: 'code',
      label: false,
      required: true,
    },
  ],
}
