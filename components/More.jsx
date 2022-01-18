import { HeartIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { buyNowCards } from '../data'
import Featured from './Featured'
import FeaturedTile from './FeaturedTile'

const More = () => {
  return (
    <div>
      <p className="text-4xl text-white mt-14 font-bold text-center tracking-wider">
        Buy Now...👀
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 place-content-center place-items-center space-y-10 lg:space-x-20 mt-2">
        {buyNowCards.map((card) => {
          return (
            <div key={card.image}>
              <div className="">
                <Image
                  src={`${card.image}`}
                  alt=""
                  height={300}
                  width={300}
                  className="rounded-tr-xl rounded-tl-xl"
                />
                <div className="bg-[#000b18] p-4 text-white border-2 -mt-2 rounded-br-xl rounded-bl-xl">
                  <p className="font-semibold">{card.name}</p>
                  <div className=" flex justify-between">
                    <div className="flex mt-1 space-x-">
                      <Image
                        src={require('../images/eth.png')}
                        alt=""
                        height={20}
                        width={20}
                      />
                      <p className="">{card.price}</p>
                    </div>

                    <HeartIcon className="h-5 w-5 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default More
