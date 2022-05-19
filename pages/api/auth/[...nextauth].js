import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Facebook({
      // clientId: process.env.FACEBOOK_CLIENT_ID,
      // clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      clientId: '329689172571660',
      clientSecret: 'ddcf1e05e2c656c6f832884c9930a122',
    }),
  ],
})
