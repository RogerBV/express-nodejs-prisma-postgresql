const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()

const getEditorials = async (request, response) => {
    const result = await prisma.editorial.findMany();
    response.json(result);
}

const getEditorialById = async (request, response) => {
    const params = request.query;
    const editorialId = params.editorialId;
    const result = await prisma.editorial.findUnique({
        where: { id: parseInt(editorialId) }
    })
    response.json(result);
}

const insertEditorial = async (request, response) => {
    const objEditorial = request.body;
    const result = await prisma.editorial.create({
        data: {
            editorialName: objEditorial.editorialName
        }
    })
    response.json(result);
}

const updateEditorial = async (request, response) => {
    const objEditorial = request.query;
    const result = await prisma.editorial.update({
        where: {
            id: objEditorial.id
        },
        data: {
            editorialName: objEditorial.editorialName
        }
    })
    response.json(result)
}

module.exports = {
    getEditorials: getEditorials,
    getEditorialById: getEditorialById,
    insertEditorial: insertEditorial,
    updateEditorial: updateEditorial
}