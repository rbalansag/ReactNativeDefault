// Interface
export interface FormValues {
   email: tEmail;
   password: tPassword;
}

export interface iProps {
   navigation: string[];
   [otherOptions: string]: unknown | any;
}

// Types
export type tEmail = string;
export type tPassword = string;
export type tFullfilled = string;
export type tKey = string;
export type tValue = string;

