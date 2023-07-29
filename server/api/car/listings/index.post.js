import Joi from "joi"
import {PrismaClient} from 'prisma/prisma-client/index.js'
const prisma = new PrismaClient()
const schema = Joi.object({
    make: Joi.string().required(),
    model: Joi.string().required(),
    year: Joi.number().min(1886).max(new Date().getFullYear() + 1),
    miles: Joi.number().required().min(0),
    price: Joi.number().required().min(0),
    numberOfSeats: Joi.number().required().min(1).max(1000),
    city: Joi.string().required().min(2),
    description: Joi.string().required().min(2),
    features: Joi.array().items(Joi.string()).required(),
    image: Joi.string().required(),
    name: Joi.string().required()
})
export default defineEventHandler(async (event) => {
    const body = readBody(event)
    const {error, value} = await schema.validate(body)
    if (error) {
        createError({statusCode: 412, statusMessage: error.message})
    }
    const {
        make,
        model,
        year,
        miles,
        price,
        numberOfSeats,
        city,
        listerId,
        description,
        features,
        image,
        name
    } = await body
    const car = await prisma.car.create({
        data: {
            make,
            model,
            year,
            listerId,
            miles,
            price,
            numberOfSeats,
            city: city.toLowerCase(),
            description,
            features,
            image,
            name
        }
    })

    return body
})
