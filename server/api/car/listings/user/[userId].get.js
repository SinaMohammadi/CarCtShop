import {PrismaClient} from "prisma/prisma-client/index.js"

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
    const userId = event.context.params

    return prisma.car.findMany({
        where: {
            listerId: userId.value
        }
    })
})
