export default async (url: string, params = {}) => {
  const { data, error, refresh } = await useFetch(url, {
    params: {
      ...params,
    },
  });
  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "We got an error",
    });
  }
  console.log(data.value);
  return { data, refresh };
};
