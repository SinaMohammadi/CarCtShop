import {PrismaClient} from "prisma/prisma-client/index.js";

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
    const {listingId} = event.context.params
    return prisma.car.delete({
        where: {
            id: +listingId
        }
    })

})
 