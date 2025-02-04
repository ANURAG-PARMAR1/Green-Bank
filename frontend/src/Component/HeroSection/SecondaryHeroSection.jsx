import React from "react";
import PropTypes from "prop-types";

const contents = [
	{
		title: "Custom Analytics",
		text: "Partner removes the hassle and confusion that comes from managing your tax burden effectively.",
	},
	{
		title: "Policy Setting",
		text: "More off this less hello salamander lied porpoise much over tightly circa horse taped.",
	},
	{
		title: "Free Enrollment",
		text: "This is a factor in the economy of a nation, and the administration takes the major choices.",
	},
	{
		title: "Shipping",
		text: "It’s no secret that the digital industry is booming. From exciting startups to global brands..",
	},
];

const ContentItem = ({ item, index }) => (
	<div className="p-4 lg:p-6 text-center">
		<div className="text-lg font-bold flex justify-center items-center">
			<span className="w-12 h-12 bg-blue-600 bg-opacity-10 flex justify-center items-center rounded-full mb-4">
				{index}
			</span>
		</div>
		<h5 className="text-xl font-bold mb-4">{item.title}</h5>
		<p className="opacity-80 mb-0">{item.text}</p>
	</div>
);

ContentItem.propTypes = {
	item: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};

export const SecondaryHeroSection = () => {
	return (
		<section className="light pb-14 md:pb-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="bg-blue-600 bg-opacity-10 py-14 md:py-24">
				<div className="container px-4 mx-auto">
					<div className="flex justify-center">
						<div className="max-w-xl text-center">
							<h1 className="text-3xl md:text-[45px] lg:text-[55px] font-bold leading-snug mb-4">
								Learn the working criteria of us
							</h1>
							<p className="text-[17px] leading-normal opacity-80">
								Coquettish darn pernicious foresaw therefore much amongst
								lingeringly shed much due antagonistically alongside so then
								more.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-4 gap-6 mt-12">
					{contents.map((item, i) => (
						<div className="col-span-4 md:col-span-2 lg:col-span-1" key={i}>
							<ContentItem index={i + 1} item={item} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};



