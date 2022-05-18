import Image from 'next/image'

function Header() {
  return (
    <div>
      <h1>Header</h1>

      {/* left */}
      <div>
        <Image src="/assets/fb.png" width="40" height="40" layout="fixed" />
      </div>

      {/* center */}

      {/* right */}
    </div>
  )
}

export default Header
