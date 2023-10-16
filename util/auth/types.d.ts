import { ZodIssue } from "zod";
import { Result } from "../types";

export type State = undefined | Result | Result<undefined, ZodIssue[]>;

export type ResponseFromServer = [
  undefined | Result | Result<undefined, ZodIssue[]>,
  any
];
