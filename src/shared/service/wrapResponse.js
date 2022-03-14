async function wrapResponseHandler(fn) {
  try {
    const res = await fn();
    return {
      status: res.status,
      data: res.data,
    };
  } catch (e) {
    return {
      status: e.response.status,
      data: e.response.data,
    };
  }
}

export default wrapResponseHandler;
