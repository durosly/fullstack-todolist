import { ReactNode } from "react";
import Header from "./header";
import MobileFooter from "@/components/layout/mobile-footer";

function AuthWrapper({ children }: { children: ReactNode }) {
	return (
		<>
			<div className="container mx-auto px-5 sm:px-0">
				<Header isAuth />
				{children}
			</div>
			<MobileFooter />
		</>
	);
}

export default AuthWrapper;
