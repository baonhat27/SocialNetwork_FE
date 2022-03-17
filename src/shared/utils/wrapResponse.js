async function wrapResponseHandler(fn) {
  try {
    const res = await fn();
    return res.data;
  } catch (e) {
    throw e.response.data;
  }
}

export default wrapResponseHandler;
