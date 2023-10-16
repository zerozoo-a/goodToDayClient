import { Result } from "../types";

export type State = undefined | Result | Result<undefined, ZodIssue[]>;
