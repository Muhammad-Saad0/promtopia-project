import { connectToDatabase } from "@lib/mongodb";
import User from "@models/userModel";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {},
    async signIn({ profile }) {
      try {
        const connection =
          await connectToDatabase();

        // const userExists = await User.findOne({
        //   email: profile.email,
        // });
        const userExists = false;
        if (!userExists) {
          const user = new User({
            email: profile.email,
            name: profile.name,
          });
          console.log(user);
          await user.save();
          console.log("USER SAVED");
        } else {
          const message = "user already exists";
          console.log(message);
        }

        return true;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
});

export { handler as GET, handler as POST };
