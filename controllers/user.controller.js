import bcrypt from 'bcrypt'
import { prisma } from '../lib/prisma.js'

export const register = async (req, res) => {
    const body = req.body
    const password = body.password

    const isUsernameExist = await prisma.user.findUnique({
        where : {
            username: body.username
        }

    })

    if (isUsernameExist){
        return res.status(400).json({
            message: 'Username already exist'
        })
    }

    const hasPassword= bcrypt.hashSync(password, 12)


    console.log(password, hasPassword)

    await prisma.user.create({
        data :{
            username: body.username,
            password: hasPassword,
            no_telp: body.no_telp,
            role: body.role,
            alamat: body.alamat
        }
    })

    return res.json({
       message: 'Register Succes'
    })
} 

export const login = async (req, res) => {
    const body = req.body
    const username = body.username
    const password = body.password

    const isUsernameExist = await prisma.user.findUnique({
        where: {
            username: username
        }
    })

    if(!isUsernameExist){
        return res.status(404).json({
            message: 'Username not found'
        })
    }

    const hasPassword = isUsernameExist.password

    if (!bcrypt.compareSync(password, hasPassword)){
        return res.status(401).json({
            message: 'Incorrect password'
        })
    }

    return res.json({
        message: 'Login Succes',
        data:{
            username: isUsernameExist.username,
            role: isUsernameExist.role,
            no_telp: isUsernameExist.no_telp
        }
    })
}

export const read = async (req, res) => {
    const users = await prisma.user.findMany()

    return res.json({
        data: users
    })
}

export const update = async (req, res) => {
    const id = Number(req.params.id)
    const body = req.body

    const isUserExist = await prisma.user.findUnique({
        where: {
            id: id
        }
    })

    if (!isUserExist) {
        return res.status(404).json({
            message: 'User ID not found!!'
        })
    }

    const user = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            username: body.username,
            no_telp: body.no_telp,
            role: body.role,
            alamat: body.alamat
        }
    })

    return res.json({
        message: 'OMG User Update !',
        data: user
    })
}

export const hapus = async (req, res) => {
    const id = Number(req.params.id)

    const isUserExist = await prisma.user.findUnique({
        where: {
            id: id
        }
    })

    if (!isUserExist) {
        return res.status(404).json({
            message: 'User ID not found!!'
        })
    }

    const user = await prisma.user.delete({
        where: {
            id: id
        }
    })

    return res.json({
        message: 'User deleted successfully'
    })
}