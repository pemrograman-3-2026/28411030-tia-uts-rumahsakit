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

export const read = async (req, res) => {
    const data = await prisma.spesialis.findMany()

    return res.json({
        data: data
    })
}

export const update = async (req, res) => {
    const id = Number(req.params.id)
    const body = req.body

    const isExist = await prisma.spesialis.findUnique({
        where: { id }
    })

    if (!isExist) {
        return res.status(404).json({
            message: 'Spesialis ID not found!!'
        })
    }

    const data = await prisma.spesialis.update({
        where: { id },
        data: {
            name: body.name,
            description: body.description
        }
    })

    return res.json({
        message: 'Spesialis updated successfully',
        data: data
    })
}

export const hapus = async (req, res) => {
    const id = Number(req.params.id)

    const isExist = await prisma.spesialis.findUnique({
        where: { id }
    })

    if (!isExist) {
        return res.status(404).json({
            message: 'Spesialis ID not found!!'
        })
    }

    const data = await prisma.spesialis.delete({
        where: { id }
    })

    return res.json({
        message: 'Spesialis deleted successfully',
        data: data
    })
}