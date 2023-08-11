import { useEffect, useState } from 'react'
import { BsLink, BsTextLeft } from 'react-icons/bs'
import { BiCopy } from 'react-icons/bi'
import { useLazyGetSummaryQuery } from '../services/article'

function Demo() {
  const [article, setArticle] = useState({
    url: '',
    summary: ''
  })

  const [allArticles, setAllArticles] = useState([])

  const [copy, setCopy] = useState('')

  const handleCopy = (copied) => {
    console.log('copied');
    setCopy(copied)
    navigator.clipboard.writeText(copied)
  }

  const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery();

  useEffect(() => {
    const fetchFromLocalStorage = JSON.parse(localStorage.getItem('articles'))
    if(fetchFromLocalStorage) {
      setAllArticles(fetchFromLocalStorage)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {data} = await getSummary({articleUrl: article.url});
    if(data?.summary) {
      const newArticle = {...article, summary: data.summary}
      const allUpdatedArticles = [newArticle, ...allArticles]
      setArticle(newArticle)
      setAllArticles(allUpdatedArticles)
      localStorage.setItem('articles', JSON.stringify(allUpdatedArticles))
      console.log(newArticle);
    }
  }

  return (
    <div className="mt-7 px-5 lg:px-10">
      <p className='text-lg text-primary font-semibold mb-3'>Paste the Url of your article, to get started</p>
      <form className='relative' onSubmit={handleSubmit}>
        {<BsLink className='absolute top-1/2 -translate-y-1/2 left-2 text-sm'/>}
        <input 
        type="url"
        placeholder="Paste article's url"
        value={article.url}
        onChange={(e) => setArticle({...article, url: e.target.value})}
        required
        className='border w-full px-10 py-2 outline-none text-sm text-secondary rounded-md'
        />
        <button><BsTextLeft className='absolute top-1/2 -translate-y-1/2 right-2 bg-white cursor-pointer text-sm' /></button>
      </form>

      {/* searched history */}
      <div className="flex flex-col max-h-24 overflow-y-auto mt-2">
        {allArticles.map((item, index) => {
         return <div className="shadow-sm p-2 rounded-md text-gray-500 mb-2 text-sm bg-white cursor-pointer" key={index} onClick={() => setArticle(item)}>
                  <p>{item.url}</p>
                </div>
        })}
      </div>

      {/* summarised paragraphs */}
      <div className='p-area mt-10'>
        <section className='flex items-center justify-between text-lg text-primary font-semibold mb-3'>
          <h1>Summary</h1>
          <BiCopy className='text-xl cursor-pointer mr-5' onClick={() => handleCopy(article.summary)}/>
        </section>
        {/* loader */}
        {isFetching && <div className='overflow-hidden mx-auto text-center mt-11 text-gray-500'>
                        <img src="loader.gif" alt="loading..." className='w-14 mx-auto' />
                        <p>Just a sec...</p>
                      </div>}

        {/* eroor */}
        {error && <p>Ooops! can't summarize this website, please try another url<br /> {error?.data?.error}</p>}

        {/* summarised paragraph */}
        {article.summary && <p className='text-secondary pr-5'>{article.summary}</p>}
      </div>
    </div>
  )
}

export default Demo
