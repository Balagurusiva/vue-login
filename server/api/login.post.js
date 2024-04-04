import { User } from "../models/user.model"

export default defineEventHandler(async (event) => {

    const { email, password } =  JSON.parse(await readBody(event))

    if (email != '' & password != '') {
        const user = await User.find({ email: email })

        if (user[0].password === password) {
            return { msg: "login successfull" }
        } else {
            return { msg: "invalid data" }
        }
    } else {
        return { msg: "data required" }
    }



})