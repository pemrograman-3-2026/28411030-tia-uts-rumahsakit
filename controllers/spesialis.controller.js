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
    const data = await prisma.genre.findMany({})

    res.json(data)
}

export const getAllSpesialisById = async (req, res) =>{

    const idGenre = req.params.id

    const data = await prisma.genre.findUnique({
        where: {
            id: Number (idGenre)
        }
    })

    res.json(data)
}

export const updateSpesialis = async (req, res) => {
    const idGenre = Number(req.params.id)

    await prisma.genre.update({
        where : {
            id : idGenre
        },
        data: req.body
    })

    res.json({
        message: 'Data Was Update Successfully'
    })
}

export const deleteSpesialis = async (req, res) =>{
    const idGenre = Number(req.params.id)

    await prisma.genre.delete({
        where :{
            id : idGenre
        }
    })

    res.json({
        message : 'Data Was Delete'
    })
}