import Image from 'next/image'
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'

const Post = ({ name, message, email, postImage, image, timestamp }) => {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-gray-300 mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img className="rounded-full" src={image} width={40} height={40} />
          <div>
            <p className="font-medium">{name}</p>
            {timestamp ? (
              <p className="text-xs text-black-400">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
              <p className="text-xs text-black-400">Loading</p>
            )}
          </div>
        </div>

        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-gray-300">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}

      <div className="flex justify-between items-center rounded-b-2xl bg-gray-300 shadow-md border-t text-black">
        <div className="inputIcon p-3 rounded-none rounded-bl-2xl text-black">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base text-black">Like</p>
        </div>

        <div className="inputIcon p-3 rounded-none text-black">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base text-black">Comment</p>
        </div>

        <div className="inputIcon p-3 rounded-none rounded-br-2xl text-black">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base text-black">Share</p>
        </div>
      </div>
    </div>
  )
}

export default Post
