/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { css, Global, withTheme } from "@emotion/react";

interface ThemmProps {
	theme: any;
}

const makeGlobalStyles = (theme): any => css`
	html,
	body {
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
			Droid Sans, Helvetica Neue, sans-serif;
	}

	* {
		box-sizing: border-box;
	}
`;

// @ts-ignore
export const GlobalStyles = withTheme(({ theme }) => <Global styles={makeGlobalStyles(theme)} />);
