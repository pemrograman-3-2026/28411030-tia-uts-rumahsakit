import { prisma } from "../lib/prisma.js"

export const create = async (req, res) => {
    const body = req.body

    await prisma.spesialis.create({
        data: {
            name: body.name,
            description: body.description
        }
            
    })

    res.json({
        message: ' Spesialis created Succes'
    })
}

export const getAllSpesialis = async (req, res) => {
    const data = await prisma.spesialis.findMany({})

    res.json(data)
}

export const getAllSpesialisById = async (req, res) =>{

    const idSpesialis = req.params.id

    const data = await prisma.genre.findUnique({
        where: {
            id: Number (idSpesialis)
        }
    })

    res.json(data)
}

export const updateSpesialis = async (req, res) => {
    const idSpesialis = Number(req.params.id)

    await prisma.spesialis.update({
        where : {
            id : idSpesialis
        },
        data: req.body
    })

    res.json({
        message: 'Data Was Update Successfully'
    })
}

export const deleteSpesialis = async (req, res) =>{
    const idSpesialis = Number(req.params.id)

    await prisma.spesialis.delete({
        where :{
            id : idSpesialis
        }
    })

    res.json({
        message : 'Data Was Delete'
    })
}