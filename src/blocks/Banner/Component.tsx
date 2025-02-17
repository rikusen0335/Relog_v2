import type { BannerBlock as BannerBlockProps } from 'src/payload-types'

import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

type Props = {
  className?: string
} & BannerBlockProps

const InfoIcon = () => 
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>


export const BannerBlock: React.FC<Props> = ({ className, content, style }) => {
  return (
    <div
      className={cn('bannerblock flex items-center px-4 py-4 border-l-[3px] rounded-r text-gray-800 dark:text-light-200', className, {
        'border-blue-400 bg-blue-200 dark:bg-blue-900 dark:border-blue-600': style === 'info',
        'border-error bg-error/30': style === 'error',
        'border-success bg-success/30': style === 'success',
        'border-warning bg-warning/30': style === 'warning',
      })}
    >
      {style === 'info' && <InfoIcon />}
      <RichText data={content} enableGutter={false} enableProse={false} />
    </div>
  )
}
