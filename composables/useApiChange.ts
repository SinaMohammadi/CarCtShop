export default async (value: string) => {
  const chData = useState("chData", () => "");
  if (chData.value == value) {
    return;
  } else {
    chData.value = value;
  }
  const { data, error, refresh } = await useFetch(`/api/city`, {
    params: {
      city: chData.value ,
    },
  });
  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Unable To Featch cities",
    });
  }
  return { data, refresh };
};
