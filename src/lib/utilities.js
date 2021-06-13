export const isValidEmail = email => new RegExp("[a-zA-Z0-9_]+.[a-zA-Z0-9_]+@[a-zA-Z0-9]+.[a-z]{1,8}").test(email);

export function sliceData(data, { limit = 1000, skip = 0 }) {
    return limit === -1 ? data.slice(skip) : data.slice(skip, skip + limit);
  }