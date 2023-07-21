// Interface
export interface iProps {
   navigation: navigation;
   [otherOptions: string]: unknown | any;
}

export interface navigation {
   navigate: navigate;
}
// Types
export type navigate = (arg0: string) => void;

export type tFullfilled = string;
