import { getSession } from "next-auth/dist/client";
import { hachPassword, verifyPassword } from "../../../lib/auth";
import { connectToDB } from "../../../lib/db";


async function hundler(req,res) {
  
  const {oldPassword,newPassword} = req.body
  
  if (req.method !== "PATCH") {
    return;
  }

  const session = await getSession({ req: req });

    if (!session) {
      res.status(401).json({
        message: "Not Authenticate !!!",
      });
      return;
    }


    const client = await connectToDB();

    const usersCollection = client.db().collection("users");

    const user  = await usersCollection.findOne({email:session.user.email})

     if(!user) {
       res.status(404).json({
         message :"User not Found ! "
       })
       client.close()
       return 
     }

    const passwordIsEquals = await verifyPassword(oldPassword,user.password)

      if(!passwordIsEquals) {

        res.status(401).json({
          message: "Password Incorrect"
        })

        client.close()
        return
    }

    const updatedpassword = await hachPassword(newPassword)

    const result =   await usersCollection.updateOne(
        { email:user.email},
        { $set: { password: updatedpassword } }
     );

    

     res.status(201).json({
       message : "Updated Successfully !!",
     })

     client.close()


}


export default hundler