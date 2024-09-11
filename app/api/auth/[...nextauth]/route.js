import Provider from "@components/Provider";
import nextAuth from "next-auth";
import { signIn } from "next-auth/react";
import GoogleProvider from 'nextAuth/providers/google';



const handler = NextAuth({
    Providers: [
        GoogleProvider({
            clientId: '',
            clientSecret: '',
        })
    ],
    async session({ session }) {

    },async signIn({ profile }){

    }
})

export {handler as GET, handler as POST};