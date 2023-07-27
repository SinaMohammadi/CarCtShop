import {PrismaClient} from "prisma/prisma-client"

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
    const {listerId} = event.context.params


    return prisma.car.findMany({
        where: {
            id: +listerId
        },
        select: {
            email: true,
            phone: true,
            year: true,
            message: true,
            id: true,
        }
    })
})
