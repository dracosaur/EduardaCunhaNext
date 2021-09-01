import { Color } from './colors'
import {get} from 'lodash';

type BreakpointValues = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Breakpoints = {
  values: BreakpointValues
}

type Theme = {
  breakpoints: Breakpoints;
  colors: Color;
  spacing: (factor: number) => void;
}

type Props = {
  theme: Theme;
}

type GetColorProps = {
  color: Color;
  theme: Theme;
}

export const getBreakpoint = (props: Props): string => {
  return `${props.theme.breakpoints.values}px`;
};

export const getColor = (props: GetColorProps): string => {
  return get(props.theme.colors, props.color);
};

export const getSpacing = (factor: number) => (props: Props): string => {
  return `${props.theme.spacing(factor)}px`;
};
