import { Post } from "@/payload-types";
import PageTemplate, { generateMetadata } from './[slug]/page'
import { PostPreview } from "@/components/PostPreview";
import { getPayload } from "payload";
import configPromise from '@payload-config'


export default async function Home() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 4,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })
  
  return (
    <div className="container">
      <div className="grid grid-cols-1 mb-32 md:grid-cols-2 md:gap-x-16 lg:gap-x-12 gap-y-20 md:gap-y-24">
        {posts.docs.map((post) => (
          <PostPreview
            key={post.slug}
            {...post}
          />
        ))}
      </div>
    </div>
  )
}

export { generateMetadata }
