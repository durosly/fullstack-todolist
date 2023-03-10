import Header from "@/components/layout/header";
import Wrapper from "@/components/layout/wrapper";
import Link from "next/link";

function Home() {
	return (
		<Wrapper>
			<Header />
			<div className="text-center space-y-5 mt-44">
				<h1 className="sr-only">Tareasy</h1>
				<h2 className="text-5xl">Task Made Easy</h2>
				<p>
					Keep track of your daily progress and gain{" "}
					<span className="block">
						clarity, capacity, confidence and satisfaction
					</span>{" "}
					from completion.
				</p>
				<div className="space-x-2">
					<Link
						className="btn btn-primary rounded-full"
						href="/signup"
					>
						Get Started
					</Link>
					<Link
						className="btn btn-secondary rounded-full"
						href="/learn-more"
					>
						Learn More
					</Link>
				</div>
			</div>
		</Wrapper>
	);
}

export default Home;
