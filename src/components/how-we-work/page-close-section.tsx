import type { FC } from "react";

const PageCloseSection: FC = () => {
	return (
		<section className="bg-black py-14 text-slate-50">
			<div className="mx-auto flex max-w-4xl flex-col items-center gap-3 px-4 text-center md:px-6">
				<p className="text-sm font-semibold text-slate-100">Process Zero</p>
				<p className="text-sm text-slate-300 sm:text-base">
					AI automation built for clarity, ownership and commercial scale
				</p>
			</div>
		</section>
	);
};

export default PageCloseSection;
