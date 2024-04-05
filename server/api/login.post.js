import { User } from "../models/user.model"

export default defineEventHandler(async (event) => {

    try {
        const { email, password } =await readBody(event)

        if (email != '' & password != '') {
            const user = await User.find({ email: email })

            if (user[0].password === password) {
                event.node.res.setHeader('Access-Control-Allow-Origin', '*');
                return { msg: "login successfull" }
            } else {
                event.node.res.setHeader('Access-Control-Allow-Origin', '*');
                return "invalid arguments or data missing"
            }
        } else {
            return { msg: "data required" }
        }

    } catch (error) {
        console.log(error)
        return error
    }



})