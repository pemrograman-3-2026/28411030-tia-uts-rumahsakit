import { prisma } from "../lib/prisma.js"

export const createDokter = async (req, res) => {
    const body = req.body

    const data = await prisma.dokter.create({
        data: {
            nama_dokter: body.nama_dokter,
            jenis_kelamin: body.jenis_kelamin,
            tanggal_lahir: new Date(body.tanggal_lahir),
            id_spesialis: Number(body.id_spesialis)
        }
    })

    res.json({
        message: "Dokter create succses",
        data
    })
}

export const updateDokter = async (req, res) => {
    const body = req.body


    const updateData = await prisma.dokter.update({
        where: {
            id: Number(req.params.id)
        },
        data: {
            nama_dokter: body.nama_dokter,
            jenis_kelamin: body.jenis_kelamin,
            tanggal_lahir: new Date(body.tanggal_lahir),
            id_spesialis: Number(body.id_spesialis)
        }
    })

    res.json({
        message: 'Dokter was updated Successfully',
        data: updateData
    })
}
export const getAllDokter = async (req, res) =>{
    const data = await prisma.dokter.findMany({
        include :{
            spesialis : true
        }
    })

    res.json(data)

}

export const deleteDokter = async (req, res) => {
    const idDokter = Number(req.params.id)

    await prisma.dokter.delete({
        where: {
            id: idDokter
        }
    })

    res.json({
        message: 'Dokter Was Delete'
    })
}
