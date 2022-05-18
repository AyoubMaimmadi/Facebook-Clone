import StoryCard from './StoryCard'

const stories = [
  {
    name: 'Ayoub Maimmadi',
    src: '/assets/ayoub.jpg',
    profile: '/assets/ayoub2.PNG',
  },
  {
    name: 'Elon Musk',
    src: '/assets/ayoub.jpg',
    profile: '/assets/ayoub2.PNG',
  },
  {
    name: 'Jeff Bezoz',
    src: '/assets/ayoub.jpg',
    profile: '/assets/ayoub2.PNG',
  },
  {
    name: 'Mark Zuckerberg',
    src: '/assets/ayoub.jpg',
    profile: '/assets/ayoub2.PNG',
  },
  {
    name: 'Bill Gates',
    src: '/assets/ayoub.jpg',
    profile: '/assets/ayoub2.PNG',
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
