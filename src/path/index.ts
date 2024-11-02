/**
 * Join paths ensuring only one / in between.
 * First path can be url.
 */
const join = (...paths: string[]) => {
  return paths.reduce((result, path) => {
    while (result.endsWith('/')) {
      result = result.slice(-1);
    }
    while (path.startsWith('/')) {
      path = path.slice(1);
    }
    return result + '/' + path;
  }, '');
};

export const path = {
  join,
};
