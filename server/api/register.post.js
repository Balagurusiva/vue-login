import { User } from "../models/user.model"

export default defineEventHandler(async (event) => {
    try {
        const { name, email, password } = await readBody(event)
        if (name !== "" & email !== "" & password !== "") {
            const user = await User.create({
                name, email, password
            })
            //return { msg: "login succesfull" }
            event.node.res.setHeader('Access-Control-Allow-Origin', '*');
            event.node.res.setHeader('Origin, X-Requested-With, Content-Type, Accept, Authorization');
            if (event.node.req.method === 'OPTIONS') {
                event.node.res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
                return "login succesfull"
            } else {
                event.node.res.setHeader('Access-Control-Allow-Origin', '*');
                return "invalid arguments or data missing"
            }
        }
    } catch (error) {
        console.log("error from registration api >>" + error)
        return error
    }




    // try {
    //     const { name, email, password } = JSON.parse(await readBody(event))
    //     if (name !== "" & email !== "" & password !== "") {
    //         const user = await User.create({
    //             name, email, password
    //         })
    //         //return { msg: "login succesfull" }
    //         return "login succesfull"
    //     } else {

    //         return "invalid arguments or data missing"
    //     }
    // } catch (error) {
    //     console.log("error from registration api >>" + error)
    //     return error
    // }
})