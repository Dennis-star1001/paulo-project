// TODO: handle edge cases

// TODO: fix typings
const authMiddleware =
  () => (next: (arg0: any) => any) => (action: { error: any; payload: { status: number } }) => {
    return next(action);
  };

export default authMiddleware;
