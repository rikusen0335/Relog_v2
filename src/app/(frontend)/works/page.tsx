import type { Metadata } from 'next/types'

import { WorkCollectionArchive } from '@/components/WorkCollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const works = await payload.find({
    collection: 'works',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      subtitle: true,
      slug: true,
      meta: true,
      usedTechs: true,
      description: true,
      createdAt: true,
      publishedAt: true,
      updatedAt: true,
    },
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />

      <div className="container mb-8">
        <PageRange
          collection="works"
          currentPage={works.page}
          limit={12}
          totalDocs={works.totalDocs}
        />
      </div>

      <WorkCollectionArchive works={works.docs} />

      <div className="container">
        {works.totalPages > 1 && works.page && (
          <Pagination page={works.page} totalPages={works.totalPages} />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Posts`,
  }
}
