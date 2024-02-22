import { STATS } from "@/data/constants";

export const Statistics = () => {
	return (
		<section id="statistics">
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
				{Object.entries(STATS).map(([key, value]) => (
					<div key={key} className="space-y-2 text-center">
						<h2 className="text-3xl sm:text-4xl font-bold ">{value}</h2>
						<p className="text-xl text-muted-foreground">{key}</p>
					</div>
				))}
			</div>
		</section>
	);
};
