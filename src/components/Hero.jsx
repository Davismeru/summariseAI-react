import { BsGithub, BsLinkedin, BsRobot } from 'react-icons/bs'
export default function Hero() {
  return (
    <div>
        {/* nav */}
        <nav className='border-b flex justify-between p-3'>
            {/* logo */}
            <section className="flex items-center font-bold text-primary">
                <BsRobot className='text-3xl mr-1'/>
                <h1>Summarizer<span className='text-secondary'>AI</span></h1>
            </section>

            <section className='flex gap-2 text-primary items-center'>
                <a href="https://github.com/Davismeru"><BsGithub/></a>
                <BsLinkedin />
            </section>
        </nav>

        {/* hero */}
        <div className='text-center px-3 font-bold mt-10 text-secondary'>
            <h1 className='text-3xl md:text-5xl'>Summerize Long Articles  With <br /> <span className='text-primary'>Summarizer</span>AI <br /> <span className='text-lg'>(Powered by GPT-4)</span></h1>

            <p className='text-lg font-normal mt-5 md:max-w-xl md:mx-auto'>Simplify your reading using SummarizeAI, which is run by the most powerful Artificial Intelligence engine of our generation, OpenAI's GPT-4. Transform Lengthy and complex articles into summarized, clear and easy to comprehend summaries</p>
            <p className='text-sm bg-primary text-white p-2 w-40 mx-auto mt-5'><a target='_blank' href="https://developerdavis.pages.dev/">meet the developer</a></p>
        </div>
    </div>
  )
}
