import Image from 'next/image'

const Footer = () => {
  return (
    <div className="flex justify-center flex-col items-center ">
      <div className="flex space-x-10">
        <div className="cursor-pointer">
          <Image
            alt=""
            src={require('../images/facebook.png')}
            height={50}
            width={50}
          />
        </div>

        <div className="cursor-pointer">
          <Image
            alt=""
            src={require('../images/insta.png')}
            height={50}
            width={50}
          />
        </div>

        <div className="cursor-pointer">
          <Image
            alt=""
            src={require('../images/linkedin.png')}
            height={50}
            width={50}
          />
        </div>
      </div>
      <div>
        <p className="text-gray-300 m-2">
          All the nfts depicted above are not the sole property of developer nor
          he is the creator, they are just use for depiction!
        </p>
      </div>
    </div>
  )
}

export default Footer
