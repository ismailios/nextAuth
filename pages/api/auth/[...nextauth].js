import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { verifyPassword } from "../../../lib/auth";
import { connectToDB } from "../../../lib/db";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connectToDB();

        const usersCollectons = client.db().collection("users");

        const user = await usersCollectons.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error("User not found !!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Could not log you !!");
        }

        client.close();

        return {
          email: user.email,
        };
      },
    }),
  ],
});
