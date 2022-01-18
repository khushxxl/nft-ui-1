/* eslint-disable @next/next/no-img-element */
const Hero = () => {
  return (
    <div className=" flex items-center justify-center flex-col">
      <p className="text-white font-bold mt-10 text-lg">
        Built for makers, by developers
      </p>

      <p className="text-5xl text-center text-white tracking-widest mt-5">
        Collector card <br /> exceptional
      </p>

      <div className="flex mt-20 space-x-20 text-white">
        <div className="h-10 bg-blue-500 border-2 border-white text-center cursor-pointer w-24 flex items-center justify-center rounded-3xl">
          <p className="font-semibold">Explore</p>
        </div>
        <div>
          <div className="h-10 border-2 border-white text-center cursor-pointer w-24 flex items-center justify-center rounded-3xl">
            <p className="font-semibold">Create</p>
          </div>
        </div>
      </div>
      {/* <div className="">
        <img
          src="https://lh3.googleusercontent.com/BP_qJ7YZQNymyeoexm_doG_rSsWVUhO6Ow-5t9vwJBG3jlx2L2BV5nf9WpxAABk-e1Dev6NKYd1tE06BXjdulbuA=w600"
          alt=""
          className=" h-32 w-36"
        />
      </div> */}
    </div>
  )
}

export default Hero
