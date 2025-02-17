import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'
import { formatAuthors } from '@/utilities/formatAuthors'

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const { categories, heroImage, populatedAuthors, publishedAt, title } = post

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  const author = populatedAuthors?.[0]

  console.log(author)

  return (
    <div className="container">
        <div className="container z-10 relative text-white pb-8">
          <div className="">
            <div className="uppercase text-sm mb-6">
              {categories?.map((category, index) => {
                if (typeof category === 'object' && category !== null) {
                  const { title: categoryTitle } = category

                  const titleToUse = categoryTitle || 'カテゴリなし'

                  const isLast = index === categories.length - 1

                  return (
                    <React.Fragment key={index}>
                      #{titleToUse}
                      {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
                    </React.Fragment>
                  )
                }
                return null
              })}
            </div>

            <div className="">
              <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl">{title}</h1>
            </div>

            <div className="flex flex-col gap-4">
              {hasAuthors && (
                <div className="flex flex items-center gap-1">
                  {author?.icon && <Media resource={author.icon} />}
                  <p>{formatAuthors(populatedAuthors)}</p>
                  <p className="text-sm">が書いた記事です</p>
                </div>
              )}
              {publishedAt && (
                <div className="flex flex items-center gap-1">
                  <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
                  <p className="text-sm">に公開</p>
                </div>
              )}
            </div>
          </div>
      </div>
      <div>
      {heroImage && typeof heroImage !== 'string' && (
        <Media imgClassName="object-cover" resource={heroImage} />
      )}
    </div>
  </div>
  )
}
