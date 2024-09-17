import Provider from "@components/Provider";
import NextAuth from "next-auth";
import { signIn } from "next-auth/react";
import GoogleProvider from "next-auth/providers/google";

import {connectaTODB} from 'utils/database'


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {

    },async signIn({ profile }){
        try {
            
        } catch (error) {
            
        }
    }
})

export {handler as GET, handler as POST};