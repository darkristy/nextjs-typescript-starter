import { FunctionComponent } from "react";
import { CacheProvider } from "@emotion/react";
import { cache } from "@emotion/css";

import { GlobalStyles } from "../styles";

interface MyAppProps {
	Component: any;
	pageProps: any;
}

const MyApp: FunctionComponent<MyAppProps> = ({ Component, pageProps }) => (
	<CacheProvider value={cache}>
		<main>
			<GlobalStyles />
			<Component {...pageProps} />
		</main>
	</CacheProvider>
);

export default MyApp;
