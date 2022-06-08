import { Index, Show } from 'solid-js'

interface SocialProps {
  data: {
    icon: string
    link: string
    class: string
    text?: string
  }
}

const SocialItem = (props: SocialProps) => {
  const { data } = props
  return (
    <a
      class={`inline-flex px-3 py-2 mt-2 mr-2 rounded-md bg-gray-50 transition-colors decoration-none ${data.class} hover:text-white dark:bg-gray-50/10`}
      href={data.link}
      target="_blank"
    >
      <div text-xl>
        <div class={data.icon} />
      </div>
      <Show when={data.text}>
        <div text-sm ml-1>
          {data.text}
        </div>
      </Show>
    </a>
  )
}

export default () => {
  const socialLists = [
    {
      text: 'Github',
      link: 'https://github.com/virgoone',
      icon: 'i-ri-github-fill',
      class: 'hover:bg-gray-700 dark:hover:bg-white dark:hover:text-gray-900',
    },
    {
      text: 'Blog',
      link: 'https://blog.douni.one',
      icon: 'i-ri-book-2-line',
      class: 'hover:bg-gray-700 dark:hover:bg-white dark:hover:text-gray-900',
    },
    {
      text: '',
      link: 'https://www.instagram.com/koya.site/',
      icon: 'i-ri-instagram-line',
      class: 'hover:bg-gradient-to-r from-[#fd5949] to-[#d6249f]',
    },
    //  {
    //   text: '',
    //   link: 'https://dribbble.com/ddiu8081',
    //   icon: 'i-ri-dribbble-line',
    //   class: 'hover:bg-[#ea4c89] dark:hover:bg-[#ea4c89]'
    // }, {
    //   text: '',
    //   link: 'https://twitter.com/ddiu8081',
    //   icon: 'i-ri-twitter-fill',
    //   class: 'hover:bg-[#00ACEE]'
    // }, {
    //   text: '',
    //   link: 'https://space.bilibili.com/541993',
    //   icon: 'i-ri-bilibili-fill',
    //   class: 'hover:bg-[#fb7299]'
    // }, {
    //   text: '',
    //   link: 'https://weibo.com/u/1767697883',
    //   icon: 'i-ri-weibo-fill',
    //   class: 'hover:bg-[#ff8200]'
    // }
  ]

  return (
    <div mt-4>
      <Index each={socialLists}>{(item) => <SocialItem data={item()} />}</Index>
    </div>
  )
}
