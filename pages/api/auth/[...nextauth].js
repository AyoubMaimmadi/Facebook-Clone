import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Facebook({
      clientId: '329689172571660',
      clientSecret: 'ddcf1e05e2c656c6f832884c9930a122',
    }),
  ],
})
