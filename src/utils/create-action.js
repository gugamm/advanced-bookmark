export function createAction(type, payload) {
  return function () {
    return {
      type, payload
    };
  };
};
