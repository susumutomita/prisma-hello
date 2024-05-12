import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()
const prisma = new PrismaClient({ log: ['query'] })

// async function main() {
//   const allUsers = await prisma.profile.findMany()
//   console.log(allUsers)
// }

// async function main() {
//   const post = await prisma.post.update({
//     where: { id: 1 },
//     data: { published: true },
//   })
//   console.log(post)
// }

async function main() {
  await prisma.post.create({
    data: {
      title: 'Hello World',
      content: 'This is a test post',
      authorId: 1,

    }
  })


  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  })
  console.dir(allUsers, { depth: null })
}



main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
