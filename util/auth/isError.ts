import { ZodError, ZodIssue } from "zod";
import { Result } from "../../app/dashboard/post/actions/postArticle.action";

type State = undefined | Result | Result<undefined, ZodIssue[]>;
function isStateError(state: State): boolean {
  if (state === undefined) return false;
  if (state.success) return false;
  return true;
}

function getErrorMessageMap<E extends string>(
  state: State
): undefined | { [k in E]: ZodIssue } {
  return isStateError(state)
    ? state?.err?.reduce((acc, cur) => {
        const key = cur.path[0];

        if (acc[key]) {
          acc[key] = { ...acc[key], ...cur };
        } else {
          acc[key] = cur;
        }
        return acc;
      }, {})
    : undefined;
}

export { isStateError, getErrorMessageMap };
