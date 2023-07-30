import {PrismaClient} from "prisma/prisma-client/index.js"

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
    const {listingId} = event.context.params


    return prisma.message.findMany({
        where: {
            listeingId: +listingId
        },
        select: {
            email: true,
            name: true,
            phone: true,
            message: true,
            id: true,
        }
    })
})
