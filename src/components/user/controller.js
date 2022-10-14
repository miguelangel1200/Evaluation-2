import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAllUser = async (req, res) => {
    try {
      const users = await prisma.user.findMany();
      res.json({
        ok: true,
        data: users,
      });
    } catch (error) {
      res.json({
        ok: false,
        data: users,
      });
    }
};

//Login 
export const login = async(req, res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if(!user){
            res.json({
                message:"Usuario no registrado"
            })
        }
        const users = await prisma.user.findUnique({
            where: {
                password
            }
        })
        if(!password){
             res.json ({
                 message:"Contraseña incorrecta"
             })
         }

    }catch(error){
        console.log(error)
    }
}

//registrar usuario 

export const create = async ( req,res ) =>{
    try{
        const email = req.body.email
        const password = req.body.password
        const name = req.body.name

        const user = await prisma.user.create({
            data:{
                email,
                password,
                name
            }
        })
        res.status(200).json({
            ok:true,
            data:user,
        })

    }catch{
        res.json({
            ok:false,
            data:error.message,
        });
    }
}