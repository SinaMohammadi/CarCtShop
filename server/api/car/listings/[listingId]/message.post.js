import Joi from "joi"
import {PrismaClient} from 'prisma/prisma-client/index'
const prisma = new PrismaClient()
const schema = Joi.object({
    email: Joi.string().email(
        {minDomainSegments: 2}
    ),
    phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    name: Joi.string().required(),
    message: Joi.string().min(20).required()

})
export default defineEventHandler(async (event) => {
    const body = readBody(event)
    const {listerId} = event.context.params
    const {error, value} = await schema.validate(body)
    if (error) {
        createError({statusCode: 412, statusMessage: error.message})
    }
    const {message, name, phone, email} = await body

    const car = await prisma.car.create({
        data: {
            message,
            phone,
            year,
            email,
            name,
            listerId:+listerId
        }
    })

    return body
})
