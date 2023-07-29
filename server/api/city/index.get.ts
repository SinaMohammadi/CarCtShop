import { PrismaClient } from "prisma/prisma-client/index";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  let { city } = getQuery(event);
  if (!city) city = "";
  const filter = {
    city: city.toLowerCase(),
  };
  filter["city"] = city;

  const data = await prisma.car.findMany({
    where: {
      city: {
        contains: city,
      },
    },
  });
  if (!data) {
    throw createError({
      statusCode: 404,
      statusMessage: `Some Thing goes wrong`,
    });
  }
  const res = data.map((car) => car.city);
  return res;
});
