import { featureCards } from '../data.js'
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import FeaturedTile from './FeaturedTile.jsx'
const Featured = () => {
  return (
    <div>
      <p className="text-4xl flex items-center justify-center text-center text-white tracking-wider mt-20">
        Explore The Featured
      </p>

      <FeaturedTile />
    </div>
  )
}

export default Featured
