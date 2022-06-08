import { createResource, Index } from 'solid-js'
import dayjs from 'dayjs'
import { getLatestPosts } from '~/lib/api'
import type { PostMeta } from '~/lib/api'

interface PostProps {
  data: PostMeta
}

const PostItem = (props: PostProps) => {
  const { data } = props
  return (
    <a
      class="flex px-3 py-2 mt-2 mr-2 rounded-md transition-colors decoration-none hover:bg-gray-100 dark:hover:bg-gray-50/10"
      href={`https://blog.douni.one/${data.slug}?utm_source=dno&utm_medium=post_item&utm_campaign=dno`}
      target="_blank"
    >
      <div flex-1 date-title={data.title}>{ data.title }</div>
      <div op-40 font-normal class="hidden sm:block">{ dayjs(data.date).format('YYYY-MM-DD') }</div>
    </a>
  )
}

export default () => {
  const [postLists] = createResource(getLatestPosts)
  const openLink = () => {
    window.open('https://blog.douni.one', '_blank')
  }
  return (
    <>
      <h2 class="flex items-center">
        <span flex-1>Posts</span>
        <div
          onClick={openLink}
          class="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer" 
        >
          <div class="m-2 i-ri-arrow-right-up-line" ></div>
        </div>
      </h2>
      <div class="grid grid-cols-1 -mx-2">
        <Index each={postLists()}>
          {item => (
            <PostItem data={item()} />
          )}
        </Index>
      </div>
    </>
  )
}