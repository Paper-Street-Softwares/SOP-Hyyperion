import { useState, useEffect } from 'react'
import WordPressBlogCard from '../WordPressBlogCard'

function BlogPosts() {
  const [posts, setPosts] = useState([])
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    fetch(
      `https://public-api.wordpress.com/rest/v1.1/sites/hyyperion0.wordpress.com/posts/`,
    )
      .then((response) => response.json())
      .then((data) => setPosts(data.posts || []))
      .catch((error) => console.error('Erro ao buscar posts:', error))
  }, [])

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1441) {
        setVisibleCount(6)
      } else {
        setVisibleCount(3)
      }
    }

    updateVisibleCount() // roda ao carregar
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  return (
    <div>
      <section className="bg-bgSectionDark" id="blog">
        <div>
          <span className="text-primary font-mono text-xs uppercase tracking-widest">
            blog
          </span>
          <h1 className="text-primary font-bold text-2xl mb-2">
            Informação jurídica ao seu alcance
          </h1>
          <p className="text-white text-sm mb-6 max-w-xl mx-auto">
            Acompanhe conteúdos exclusivos para manter-se sempre informado.
          </p>
        </div>

        <ul className="flex flex-wrap gap-[30px] justify-center mb-[80px]">
          {posts.slice(0, visibleCount).map((post) => (
            <li key={post.ID}>
              <WordPressBlogCard
                img={
                  post.featured_image && (
                    <img
                      src={post.featured_image}
                      alt="Imagem do post"
                      className="rounded-2xl"
                    />
                  )
                }
                title={
                  <h1
                    className=""
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />
                }
                subtitle={
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        post.excerpt.length > 100
                          ? post.excerpt.substring(0, 60) + '...'
                          : post.excerpt,
                    }}
                  />
                }
                link={post.URL}
              />
            </li>
          ))}
        </ul>

        <div>
          <p className="text-center text-white underline transition hover:scale-110">
            <a
              href="https://hyyperion0.wordpress.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clique aqui para ver todas as matérias
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

export default BlogPosts
