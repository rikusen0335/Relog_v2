import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { BLOG_REPOSITORY_URL } from "@/constants"

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  return (
    <footer className="border-t bg-accent-1 border-accent-2 dark:bg-[#181827] dark:border-[#212130]">
      <div className="container px-4 mx-auto md:px-5">
				<div className="flex flex-col items-center py-28 lg:flex-row">
					<h3 className="mb-10 text-4xl font-bold leading-tight tracking-tighter text-center lg:text-5xl lg:text-left lg:mb-0 lg:pr-4 lg:w-1/2 dark:text-light-100">
						Here's nothing to write. Please give me an idea.
					</h3>
					<div className="flex flex-col items-center justify-center lg:flex-row lg:pl-4 lg:w-1/2">
						<a
							href={BLOG_REPOSITORY_URL}
							className="mx-3 font-bold hover:underline dark:text-light-200"
						>
							<p>Dumb codes written by rikusen0335</p>
						</a>
					</div>
				</div>
      </div>
		</footer>
  )

  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t border-border bg-black dark:bg-card text-white">
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <Link className="flex items-center" href="/">
          <Logo />
        </Link>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <ThemeSelector />
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav>
        </div>
      </div>
    </footer>
  )
}
