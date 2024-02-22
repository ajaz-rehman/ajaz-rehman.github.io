import SocialLinks from "./SocialLinks";

export const Footer = () => {
	return (
		<footer id="footer">
			<hr className="w-11/12 mx-auto" />

			<section className="container py-14 flex flex-col lg:flex-row gap-8 text-center items-center justify-between">
				<SocialLinks />
				<h3>
					Built with{" "}
					<a
						target="_blank"
						href="https://github.com/leoMirandaa"
						className="text-primary transition-all border-primary hover:border-b-2"
					>
						Vite
					</a>
					, and{" "}
					<a
						target="_blank"
						href="https://github.com/leoMirandaa"
						className="text-primary transition-all border-primary hover:border-b-2"
					>
						TailwindCSS
					</a>
					. Deployed with AWS S3 and CloudFront.
				</h3>
			</section>
		</footer>
	);
};
