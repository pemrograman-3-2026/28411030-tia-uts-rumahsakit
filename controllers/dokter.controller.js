import { prisma } from "../lib/prisma.js"

export const create = async (req, res) => {
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