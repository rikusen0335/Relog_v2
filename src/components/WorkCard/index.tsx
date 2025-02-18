import { Media } from "@/components/Media";
import { Work } from "@/payload-types";
import Link from "next/link";

type Props = {
	doc: Work;
};

export const WorkCard = ({
	doc
}: Props) => {
  const { slug, categories, meta, title, subtitle, usedTechs, publishedAt } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/works/${slug}`

	return (
		<Link href={`/works/${slug}`}>
			<div className="relative h-[500px] dark:brightness-[90%] group hover:cursor-pointer transition duration-150">
        {metaImage && typeof metaImage !== 'string' &&
          <Media resource={metaImage} className="h-[500px] w-full object-cover brightness-[30%] lg:brightness-[90%] group-hover:brightness-[30%] group-hover:grayscale-[0.4] ease-out transition duration-150" size="33vw" />
        }
				<div className="absolute inset-0 flex flex-col p-16 transition duration-150 lg:hidden group-hover:flex">
					<h2 className="text-3xl font-bold lg:text-4xl text-light-100">
						{title}
					</h2>
					<h3 className="mt-1 text-xl font-bold text-light-200">{subtitle}</h3>
          {description && <div className="mt-6 text-light-100">{description && <p>{sanitizedDescription}</p>}</div>}
					<div className="flex flex-wrap mt-4 space-x-4">
						{usedTechs.map((name, idx) => (
							<p key={idx} className="text-light-300">
								{name}
							</p>
						))}
					</div>
					<p className="mt-auto text-lg font-bold text-center text-light-300">
						クリックしてもっと見る
					</p>
				</div>
			</div>
		</Link>
	);
};