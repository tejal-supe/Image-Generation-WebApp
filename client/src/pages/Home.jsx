import React,{useState,useEffect} from 'react'

import { Loader, Card, FormField } from '../components'


const RenderCards = ({data,title}) => {
    if (data.length > 0) {
        return data.map((post) => <Card key={post.id} {...post} />)
    }

    return (
        <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>{title}</h2>
    )
}


const Home = () => {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState(null)
    const [searchText,setSearchText] = useState("Images")
  return (
      <section className='max-w-7xl mx-auto'>
          <h1 className='font-inter font-bold text-[#222328] text-[30px]'>The AI Generated Images</h1>

          <div className="mt-6">
              <FormField />
          </div>


          <div className="mt-7">
              {
                  loading ? <div className='flex justify-center items-center'>
                      <Loader />
                  </div>
                      :
                      <div>
                          {
                              searchText ? <>
                                  <h2 className='text-[#666e75] font-medium mb-3 '> Showing Results for <span className='text-[#222328] text-xl '>{searchText }</span></h2>
                              </> :null
                          }


                          <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                              {
                                  searchText ?
                                      <RenderCards
                                          data={[]}
                                          title="No data found"
                                      />
                                      :
                                      <RenderCards
                                      data={[]}
                                        title="No posts found"
                                      />
                              }
                          </div>
                      </div>
              }
          </div>
    </section>
  )
}

export default Home