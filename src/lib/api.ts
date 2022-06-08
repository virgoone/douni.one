export interface PostMeta {
  id: string
  title: string
  url: string
  slug: string
  date: string
}

export function getLatestPosts(): Promise<PostMeta[]> {
  const apiUrl = `https://blog.douni.one/api/posts?limit=5&fields=title,slug,date`
  return fetch(apiUrl).then(async (res) => {
    const result = await res.json()
    return result.posts
  })
}
