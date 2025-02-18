'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'
import { CategoryBadge } from "@/components/CategoryBadge"

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title' | 'publishedAt' | 'populatedAuthors'>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, categories, meta, title, publishedAt, populatedAuthors } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const author = populatedAuthors?.[0]
  const href = `/${relationTo}/${slug}`

  return (
    <Link className="not-prose" href={href} ref={link.ref}>
      <article
        className={cn(
          'border border-border rounded-lg overflow-hidden bg-[#121120] hover:cursor-pointer hover:-translate-y-1 transition duration-200 ease-in-out',
          className,
        )}
        ref={card.ref}
      >
        <div className="relative w-full ">
          {!metaImage && <div className="">No image</div>}
          {metaImage && typeof metaImage !== 'string' && <Media resource={metaImage} size="33vw" />}
        </div>
        <div className="p-4">
          {showCategories && hasCategories && (
            <div className="text-sm mb-2">
              {showCategories && hasCategories && (
                <div>
                  {categories?.map((category, index) => {
                    if (typeof category === 'object') {
                      const { title: titleFromCategory } = category

                      const categoryTitle = titleFromCategory || 'Untitled category'

                      const isLast = index === categories.length - 1

                      return (
                        <Fragment key={index}>
                          <CategoryBadge name={categoryTitle} />
                          {!isLast && <Fragment>, &nbsp;</Fragment>}
                        </Fragment>
                      )
                    }

                    return null
                  })}
                </div>
              )}
            </div>
          )}
          {titleToUse && (
            <div className="prose">
              <h3 className="text-lg">
                {titleToUse}
              </h3>
            </div>
          )}
          {description && <div className="mt-2">{description && <p>{sanitizedDescription}</p>}</div>}
        </div>
      </article>
    </Link>
  )
}
