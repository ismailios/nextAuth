import { connectToDB } from "../../../lib/db";
import { hachPassword } from "../../../lib/auth";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const data = req.body;

      const { email, password } = data;

      if (
        !email ||
        !email.includes("@") ||
        !password ||
        password.trim().length < 7
      ) {
        res.status(420).json({
          message: "Inputs  not valid",
        });
        return;
      }

      const client = await connectToDB();
      const db = client.db();

      const existingUser = await db
        .collection("users")
        .findOne({ email: email });

      if (existingUser) {
        res.status(422).json({
          message: "user Already Exist !!",
        });
        client.close();
        return;
      }

      const hachedPassword = await hachPassword(password);

      const result = await db.collection("users").insertOne({
        email: email,
        password: hachedPassword,
      });

      res.status(201).json({
        message: "User Created Successefully !!",
      });
      client.close();
    } catch (error) {
      console.log(error);
    }
  }
};

export default handler;
