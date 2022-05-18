const stories = [
  {
    name: 'Ayoub Maimmadi',
    src: '/assest/ayoub.jpg',
    profile: '/assest/ayoub2.PNG',
  },
  {
    name: 'Elon Musk',
    src: '/assest/ayoub.jpg',
    profile: '/assest/ayoub2.PNG',
  },
  {
    name: 'Jeff Bezoz',
    src: '/assest/ayoub.jpg',
    profile: '/assest/ayoub2.PNG',
  },
  {
    name: 'Mark Zuckerberg',
    src: '/assest/ayoub.jpg',
    profile: '/assest/ayoub2.PNG',
  },
  {
    name: 'Bill Gates',
    src: '/assest/ayoub.jpg',
    profile: '/assest/ayoub2.PNG',
  },
]

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  )
}

export default Stories
