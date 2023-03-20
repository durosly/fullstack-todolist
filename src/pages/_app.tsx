import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
			<Toaster />
		</>
	);
}
