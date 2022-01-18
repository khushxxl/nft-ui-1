import Image from 'next/image'

const Trending = () => {
  return (
    <div className="text-white mt-20 flex items-center justify-center flex-col">
      <p className="text-4xl text-center tracking-wider">Trending Now 🔥</p>
      <div className="mt-10 flex flex-col w-full items-center lg:flex-row lg:items-start lg:justify-evenly  justify-center max-w-3xl">
        <div className="">
          <Image
            src="https://lh3.googleusercontent.com/toLM7fA5Dag-iH0Hy9hVPA5ARQcgUkT-xQBkbCxJI6WD1lhZDtkd4uLaD9zlZD_aAF0jt6fmanuncb_b35mmhUsTQ494g4AGWMqkFIc=w335"
            alt=""
            height={440}
            width={410}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <p className="font-bold text-3xl">{'Fomo Mofos'}</p>
          <div className="flex mt-1 space-x-1 text-center">
            <Image
              src={require('../images/eth.png')}
              alt=""
              height={18}
              width={26}
            />
            <p className="text-2xl mt-2 text-center">{'420.69'}</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-xl mt-2">{'Auction Ends in 23 hrs'}</p>
            <div className="h-10 bg-blue-500 border-2 border-white text-center cursor-pointer w-32 mt-5 flex items-center justify-center rounded-3xl">
              <p className="font-semibold">Buy Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending
