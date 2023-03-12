import Wrapper from "@/components/layout/wrapper";
import DataIntegration from "@/icons/data-integration";
import Priority from "@/icons/priority";
import ProgressTracker from "@/icons/progress-tracker";
import Link from "next/link";

function Home() {
	return (
		<Wrapper>
			<div className="text-center space-y-5 mt-44 h-[70vh]">
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
			<div className="max-w-4xl mx-auto">
				<div className="text-center">
					<h2 className="inline-block bg-green-200 text-green-700 px-4 rounded-full">
						Why Join Tareasy?
					</h2>
					<p className="text-4xl mt-5">Tasking made easy</p>
				</div>
				<div className="space-y-10 text-justify mt-10 text-lg">
					<p>
						Tareasy is a powerful but user-friendly to-do list app
						that allows you to manage all of your tasks and stay
						organized like never before. Tareasy makes it simple to
						create and manage multiple to-do lists, set due dates,
						and receive reminders so you never forget a task again.
					</p>
					<p>
						But that's just the start. Tareasy includes a number of
						advanced features designed to help you optimize your
						workflow and get more done in less time. Here are a few
						examples of how Tareasy can help you be more productive:
					</p>
				</div>
				<div className="flex gap-5 mt-20 mb-20 text-center justify-center">
					<div className="bg-slate-100 p-5 rounded-2xl flex-1 flex flex-col justify-center">
						<Priority className="w-44 h-60 mx-auto" />
						<h3 className="text-2xl font-bold">
							Task Prioritization
						</h3>
						<p>
							Orchestrate your tasks according to importance. This
							makes it simple to fully focus on the key activities
						</p>
					</div>
					<div className="flex flex-col gap-5 flex-1">
						<div className="flex-1 p-5 bg-slate-100 rounded-2xl">
							<ProgressTracker className="w-10 h-20 mx-auto" />
							<h3 className="text-2xl font-bold">
								Progress Tracking
							</h3>
							<p>
								track your progress so you can see how much
								you&apos;ve achieved
							</p>
						</div>
						<div className="flex-1 p-5 bg-slate-100 rounded-2xl">
							<DataIntegration className="w-10 h-20 mx-auto" />
							<h3 className="text-2xl font-bold">
								Multi-platform compatible
							</h3>
							<p>
								works across all your devices, so you can access
								your to-do lists and tasks no matter where you
								are
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="max-w-4xl mx-auto  p-5 text-center rounded-2xl mb-20">
				<h3 className="text-3xl mb-5">
					Bring your productivity to the next level
				</h3>
				<p>
					The best productivity tool for anyone who wants to
					accomplish more in less time is Tareasy. Tareasy is the only
					to-do list program you&apos;ll ever need thanks to its
					simple interface, cutting-edge features, and seamless
					integration. Why then wait?{" "}
					<Link
						className="text-success hover:underline"
						href="/signup"
					>
						Join
					</Link>{" "}
					Tareasy right away to start managing your productivity like
					never before.
				</p>
			</div>
		</Wrapper>
	);
}

export default Home;
