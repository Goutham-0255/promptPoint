import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Explore & share 
        <br className="max-md:block" />
        <span className="orange_gradient text-center">
         AI powered prompts
        </span>
      </h1>

      <p className="desc text-center">
        PromptPoint is an open-source AI tool for today’s world, letting you discover, create, and share engaging prompts 
      </p>

    <Feed/>
    </section>
  )
}

export default Home