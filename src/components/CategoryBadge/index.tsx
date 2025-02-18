import { cn } from "@/utilities/ui"

type Props = {
  name: string;
  className?: string;
}

export const CategoryBadge = ({ name, className, }: Props) => {
  return (
    <div
			className={cn(
				className,
				"bg-white inline-flex items-center px-3 py-[2px] border border-gray-200 rounded-3xl dark:border-gray-800 dark:bg-portgore-800 dark:text-light-200",
			)}
		>
			<p className="mr-[4px] text-sm">#</p>
			<p className="text-base font-bold">{name}</p>
		</div>
  )
}