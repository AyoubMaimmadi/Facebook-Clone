import Image from 'next/image'
import { signin } from 'next-auth/client'

function Login() {
  return (
    <div className="grid place-items-center m-10">
      <Image
        src="/assets/fb.png"
        height={200}
        width={200}
        objectFit="contain"
        alt="image"
      />
      <h1
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer mt-10"
        onClick={signin}
      >
        Login with Facebook
      </h1>
    </div>
  )
}

export default Login
