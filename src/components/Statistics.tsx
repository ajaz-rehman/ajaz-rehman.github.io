interface statsProps {
	quantity: string;
	description: string;
}

export const Statistics = () => {
	const yearsOfExperience = new Date().getFullYear() - 2019;

	const stats: statsProps[] = [
		{
			quantity: yearsOfExperience + "Y+",
			description: "Experience",
		},
		{
			quantity: "4",
			description: "Companies",
		},
		{
			quantity: "7",
			description: "Products",
		},
		{
			quantity: "9K+",
			description: "Commits",
		},
	];

	return (
		<section id="statistics">
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
				{stats.map(({ quantity, description }: statsProps) => (
					<div key={description} className="space-y-2 text-center">
						<h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
						<p className="text-xl text-muted-foreground">{description}</p>
					</div>
				))}
			</div>
		</section>
	);
};
