const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const getAuthors = async (request, response) => {
    try {
        const result = await (await prisma.author.findMany({
            orderBy: {
                id: 'asc'
            }
        }))
        response.json(result);
    } catch (error) {
        console.log(error);
        return [];
    }
}

const getAuthorById = async (request, response) => {
    try {
        const objAuthor = request.query;
        const result = await prisma.author.findUnique({
            where: {
                id: parseInt(objAuthor.authorId)
            }
        });
        response.json(result);
    } catch(error) {
        console.log(error);
    }
}

const insertAuthor = async (request, response) => {
    try {
        const objAuthor = request.body;
        const result = await prisma.author.create({
            data: {
                firstName: objAuthor.firstName,
                lastName: objAuthor.lastName
            }
        })
        response.json(result)
    } catch(error) {
        console.log(error);
    }
}

const updateAuthor = async (request, response) => {
    try {
        const objAuthor = request.body;
        console.log(objAuthor)
        const result = await prisma.author.update({
            where: {
                id: parseInt(objAuthor.id)
            },
            data: {
                firstName: objAuthor.firstName,
                lastName: objAuthor.lastName
            }
        })
        response.json(result)
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    getAuthors: getAuthors,
    getAuthorById: getAuthorById,
    insertAuthor: insertAuthor,
    updateAuthor: updateAuthor
}