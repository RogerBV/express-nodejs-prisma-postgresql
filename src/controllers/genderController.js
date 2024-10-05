const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const insertGender = async(request, response) => {
    try {
        const objGender = request.body;
        const result = await prisma.gender.create({
            data: {
                genderName: objGender.genderName
            }
        })
        response.json(result);
    } catch(error) {
        console.log(error);
    }
}

const updateGender = async (request, response) => {
    try {
        
        const objGender = request.query

        console.log(JSON.stringify(request.query));
        console.log(JSON.stringify(request.body));
        const result = await prisma.gender.update({
            where: {
                id: parseInt(objGender.id)
            },
            data: {
                genderName: objGender.genderName
            } 
        })
        response.json(result);
    } catch(error) {
        console.log(error);
    }
}

const getGenders = async (request, response) => {
    try {
        const result = await prisma.gender.findMany();
        response.json(result);
    } catch(error) {
        console.log(error);
        response.json([]);
    }
}

const getGenderById = async (request, response) => {
    try {
        const params = request.query;
        const genderId = params.genderId;
        console.log(genderId);
        const result = await prisma.gender.findUnique({
            where: {
                id: parseInt(genderId)
            }
        })
        response.json(result);
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    getGenders: getGenders,
    getGenderById: getGenderById,
    insertGender: insertGender,
    updateGender: updateGender
}