import { CategoryBadge } from "@/components/CategoryBadge";
import { Media } from "@/components/Media";
import { Post } from "@/payload-types";
import { cn } from "@/utilities/ui";
import Link from "next/link";
import { Fragment } from "react";

type Props = Pick<Post, 'title' | 'publishedAt' | 'categories' | 'populatedAuthors' | 'slug' | 'meta'> & {
  className?: string
};

export const PostPreview = ({
	title,
	publishedAt,
  categories,
  populatedAuthors,
  slug,
  meta,
  className,
}: Props) => {
  const href = `/posts/${slug}`
  const author = populatedAuthors?.[0]
  const { description, image: metaImage } = meta || {}
  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space

	return (
		<Link className="not-prose" href={href}>
      <article
        className={cn(
          'overflow-hidden hover:cursor-pointer hover:opacity-80 transition duration-200 ease-in-out',
          className,
        )}
      >
        <div className="relative w-full ">
          {!metaImage && <div className="">No image</div>}
          {metaImage && typeof metaImage !== 'string' && <Media resource={metaImage} size="33vw" />}
        </div>
        <div className="p-4">
          {title && (
            <div className="prose">
              <h3 className="text-3xl font-bold">
                {title}
              </h3>
            </div>
          )}
          {hasCategories && (
            <div className="text-sm mt-2">
              {hasCategories && (
                <div>
                  {categories?.map((category, index) => {
                    if (typeof category === 'object') {
                      const { title: titleFromCategory } = category

                      const categoryTitle = titleFromCategory || 'カテゴリなし'

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
          {description && <div className="mt-2">{description && <p>{sanitizedDescription}</p>}</div>}
        </div>
      </article>
    </Link>
	);
};