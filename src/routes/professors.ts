import { FastifyInstance } from "fastify";
import { prisma } from '../lib/prisma'


export async function professors(app: FastifyInstance) {
    app.get('/professors', async (request) => {
        const professors= await prisma.professor.findMany()
        // const professor = await prisma.professor.findUnique({
        //   where:{
        //     id: 1
        //   }
        // })
    
        // return professor
    
        return professors.map((professor) => {
          return {
            id: professor.id,
            firstName: professor.firstName,
            lastName: professor.lastName,
            email: professor.email,
            subject: professor.courseId
          }
        })
      })
    
    
      app.post('/professors', async (request) => {
        const professor = await prisma.professor.create({
          data: {
            firstName: 'Charles',
            lastName: 'Twain',
            email: 'ctwain@gmail.com',
          }
        })
        return professor
      })
    
      app.put('/professor', async (request) => {
        const professor = await prisma.professor.update({
          where: {
            id: 7
          },
          data: {
            lastName: "Trent"
          }
        })
        return professor
      })
    
      app.delete('/professor', async (request) => {
        const professor = await prisma.professor.delete({
          where: {
            id: 7
          }
        })
        return professor
      })
}