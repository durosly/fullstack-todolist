import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

function Wrapper({ children }: { children: ReactNode }) {
	return (
		<>
			<div className="container mx-auto">
				<Header />
				{children}
			</div>
			<Footer />
		</>
	);
}

export default Wrapper;
