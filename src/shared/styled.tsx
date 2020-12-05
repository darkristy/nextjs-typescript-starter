/* eslint-disable @typescript-eslint/ban-ts-ignore */
import styled, { CreateStyled } from "@emotion/styled";

type Theme = {
	primary: string;
	secondary: string;
	tietary: string;
	accent: string;
};
// @ts-ignore

export default styled as CreateStyled<Theme>;
