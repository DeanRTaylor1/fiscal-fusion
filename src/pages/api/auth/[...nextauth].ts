import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("User email:", user.email);
      console.log("User name:", user.name);
      console.log("User image:", user.image);

      console.log("GoogleProfile email:", profile!.email);
      console.log("GoogleProfile name:", profile!.name);
      console.log("GoogleProfile picture:", profile!.image);

      return true;
    },
  },
});
