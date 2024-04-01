export default defineEventHandler(async (event) => {

    const {name, email,password} = await readBody(event)
    if(name !== "" & email !== "" & password !== ""){
        const user = await User.create({
            name,email, password
        })
         setResponseStatus(event, 202)
        return {msg : "login succesfull"}
    }else{
         
        return {msg:"invalid arguments or data missing"}
    }
    
})