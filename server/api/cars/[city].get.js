import {PrismaClient} from 'prisma/prisma-client/index'
const prisma = new PrismaClient()
export default defineEventHandler((event) => {
    const {make, minPrice, maxPrice} = getQuery(event)
    const {city} = event.context.params
    const filter = {
        city: city.toLowerCase()


    }
    filter["city"] = city
    if (make) {
        filter["make"] = make
    }
    if (minPrice || maxPrice) {
        filter["price"] = {}
    }
    if (minPrice) {
        filter.price.gte = parseInt(minPrice)
    }
    if (maxPrice) {
        filter.price.lte = parseInt(maxPrice)
    }
    const data = prisma.car.findMany({where: filter})
    if (!data) {
        throw createError({statusCode: 404, statusMessage: `Zero Car Was Found In Your Selected City ${city}`})
    }
    return data
})
