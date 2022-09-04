const { register, login } = require("../models/login")
const bcrypt = require('bcrypt')
const { diascookie } = require("./utils/time")



module.exports.registerController = async (req, res) => {
     let{email, password} = req.body
     password = bcrypt.hashSync(password, 10)
   
     try{
        const user = await register(email, password)
        if(user.exitUser){
         res.cookie("session",user, {maxAge:diascookie(3)}
         )}
        return res.status(201).send(user)
     } catch (error) {console.log(error)
        return res.status(500).send('Hubo un error en el registro!!')
     }
}


module.exports.loginController = async (req, res) => {
   const {email, password} = req.body
 try{
      const user = await login(email, password)
      if(user.exitUser){
         res.cookie("session",user, {maxAge:diascookie(3)}
         )}
      return res.status(200).send(user)
   } catch (error){
      return res.status(500).send('Hubo un error en el ingreso')
   }
}


