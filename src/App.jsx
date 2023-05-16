import './App.css' 
const Blog = ({Title, Description}) => {
  return (
    <div className="blog">
      <h1>{Title}</h1>
      <p>{Description}</p>
    </div>
  )
}

const Highlights = ({Blog_highlight}) => {
  return (
    <div className="hg">
      <h3>{Blog_highlight}</h3>
    </div>
  )
}

const Footer = ({name, Date}) => {
  return(
    <>
      <h2>{name}</h2>
      <h3>{Date}</h3>
    </>
  )
}

function App() {
  return (
    
      <div className="app">
        <div className="nav">
          <h1>Blog Posts</h1>
        </div>
        <div className="BodyContent">
          <div className="cleft"> 
    <Blog Title="Essential Tips for Effective Time Management" Description="This blog post provides readers with valuable insights and practical techniques to improve their time management skills. It covers topics such as setting clear goals, prioritizing tasks, avoiding multitasking, and utilizing productivity tools. With easy-to-follow advice and real-life examples, this post empowers readers to maximize their productivity, reduce stress, and achieve better work-life balance."/> 
    <Blog Title="The Art of Mindful Living" Description="Cultivating Inner Peace and Happiness: In this blog post, readers are introduced to the concept of mindful living and its profound impact on mental well-being. It delves into various mindfulness practices, including meditation, breathing exercises, and self-reflection, while highlighting the benefits of incorporating them into daily routines. The post emphasizes the importance of being present, letting go of distractions, and fostering gratitude, ultimately guiding readers on a path toward greater inner peace and long-lasting happiness."/> 
    
    <Blog Title="Building Resilience" Description="Overcoming Challenges and Bouncing Back Stronger: This inspiring blog post explores the significance of resilience in navigating life's inevitable setbacks and challenges. It offers practical strategies for developing resilience, such as reframing adversity, nurturing a positive mindset, seeking support networks, and learning from failures. With captivating stories of individuals who have overcome obstacles, this post encourages readers to embrace resilience as a powerful 
    tool for personal growth, increased confidencez" />
    </div>
    <div className="highlight">
      <Highlights Blog_highlight="Essential Tips for Effective Time Management"/>
      <Highlights Blog_highlight="The Art of Mindful Living" />
      <Highlights Blog_highlight="Building Resilience" />
    </div>
    </div>
    <div className="footer">
      <Footer name="Kariuki Evans Ngugi" Date={Date()} />
    </div>
    </div>
    
  )
}
export default App
