import AnimeList from "@/app/components/AnimeList"
import Header from "@/app/components/AnimeList/Header"
import { getAnimeResponse } from "@/libs/api-libs"

const Page = async({ params }) => {
const { keyword } = params

const decodedKeyword = decodeURI(keyword)
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)

  return (
  <>
  <section> 
  <Header title={`Pencarian Untuk ${decodedKeyword}...`} />
    <AnimeList api={searchAnime}/>
  </section>
    </>
  )
}

export default Page