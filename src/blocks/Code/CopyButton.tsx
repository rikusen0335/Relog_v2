'use client'
import { Button } from '@/components/ui/button'
import { CopyIcon } from '@payloadcms/ui/icons/Copy'
import { useState } from 'react'

export function CopyButton({ code }: { code: string }) {
  const [text, setText] = useState('Copy')

  function updateCopyStatus() {
    if (text === 'Copy') {
      setText(() => 'Copied!')
      setTimeout(() => {
        setText(() => 'Copy')
      }, 1000)
    }
  }

  return (
    <Button
      className="absolute flex gap-1 items-center top-0 right-0 px-2 py-1 m-3 bg-gray-500 rounded dark:bg-portgore-600 text-light-100 dark:text-light-200 border-light-900"
      variant={'secondary'}
      onClick={async () => {
        await navigator.clipboard.writeText(code)
        updateCopyStatus()
      }}
    >
      <p className="!m-0 pl-1">{text}</p>
      <CopyIcon />
    </Button>
  )
}
