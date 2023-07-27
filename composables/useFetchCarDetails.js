export default async (id) => {
    const {data, error} = await useFetch(`/api/car/${id}`)
    if (error.value) {
        throw createError({
            ...error.value,
            statusMessage: "Unable To Fetch Details Cars"
        })
    }
    return {data}
}
