import {PrismaClient} from "prisma/prisma-client/index.js"

const prisma = new PrismaClient()
export default defineEventHandler((event) => {
    const {id} = event.context.params
    const car = prisma.car.findUnique({
        where: {
            id: +id
        }
    })
    if (! car) {
        throw createError({statusCode: 404, statusMessage: `Car With This ${id} Not Found`})
    }
    return car
})
