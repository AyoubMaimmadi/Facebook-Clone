import { useRef, useState } from 'react'
import Image from 'next/image'
import firebase from 'firebase'
import { useSession } from 'next-auth/client'
import { db, storage } from '../firebase'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'

const InputBox = () => {
  const [session] = useSession()
  const inputRef = useRef(null)
  const filepickerRef = useRef(null)
  const [imageToPost, setImageToPost] = useState(null)

  const sendPost = (e) => {
    e.preventDefault()

    if (!inputRef.current.value) return

    db.collection('posts')
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, 'data_url')
          removeImage()
          uploadTask.on(
            'state_changed',
            null,
            (error) => {
              console.log(error)
            },
            () => {
              storage
                .ref('posts')
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection('posts').doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  )
                })
            }
          )
        }
      })

    inputRef.current.value = ''
  }

  const addImageToPost = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result)
    }
  }

  const removeImage = () => {
    setImageToPost(null)
  }

  return (
    <div className="bg-gray-200 p-2 rounded-2xl shadow-lg text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
          alt="image"
        />
        <form className="flex flex-1 ">
          <input
            className="rounded-full h-12 bg-gray-50 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`Say something or upload a photo, ${
              session.user.name.split(' ')[0]
            }?`}
            ref={inputRef}
          />
          <button hidden onClick={sendPost}>
            Submit
          </button>
        </form>
        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img className="h-10 object-contain " src={imageToPost} alt="" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base text-gray-600">
            Live Video
          </p>
        </div>

        <div
          onClick={() => filepickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base text-gray-600">
            Photo/Video
          </p>
          <input
            onChange={addImageToPost}
            ref={filepickerRef}
            type="file"
            hidden
          />
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300 " />
          <p className="text-xs sm:text-sm xl:text-base text-gray-600">
            Feeling/Activity
          </p>
        </div>
      </div>
    </div>
  )
}

export default InputBox
