import Image from 'next/image'

function Login() {
  return (
    <div>
      <Image
        src="/assets/fb.png"
        height={400}
        width={400}
        objectFit="contain"
      />
    </div>
  )
}

export default Login
