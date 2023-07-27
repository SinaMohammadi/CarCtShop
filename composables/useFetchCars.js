export default async (city, filter) => {
    const {data, error, refresh} = await useFetch(`/api/cars/${city}`, {
        
        params: {
            ...filter
        }
    })
    if (error.value) {
        throw createError({
            ...error.value,
            statusMessage: "Unable To Featch Cars"
        })
    }
    return {data, refresh}
}
