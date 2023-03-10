import { ReactNode } from "react";

function Wrapper({ children }: { children: ReactNode }) {
	return <div className="container mx-auto">{children}</div>;
}

export default Wrapper;
