import { Index } from 'solid-js'
import ProjectItem from './ProjectItem'

export default () => {
  const projectLists = [
    {
      name: 'Transform 工具',
      desc: '基于开源修改，增加了一些工具，升级了全部依赖',
      link: 'https://douni.one',
      icon: 'i-twemoji-astronaut',
    },
    {
      name: 'CRA',
      desc: '一个类似CRA的实现，主要用于 react 项目',
      link: 'https://dev.douni.one',
      icon: 'i-twemoji-exploding-head',
    },
    {
      name: '项目模版',
      desc: '比较全的不同端项目模版（console,web,mobile）',
      link: 'https://dev.douni.one/docs/template/default',
      icon: 'i-twemoji-card-index-dividers',
    },
    {
      name: 'react-cool-image',
      desc: '一个图片懒加载简单实现方案',
      link: 'https://react-cool-image.netlify.app/',
      icon: 'i-twemoji-ice',
    },

    {
      name: 'Tool',
      desc: '一个一直在做但没做完的工具库',
      link: 'https://lark-docs.douni.one',
      icon: 'i-twemoji-carousel-horse',
    },
    {
      name: 'vue project',
      desc: '豌豆荚视频详情页 vue 实现',
      link: 'https://github.com/virgoone/eyepetizer',
      icon: 'i-twemoji-eye',
    },
  ]
  const openLink = () => {
    window.open('https://github.com/virgoone', '_blank')
  }
  return (
    <>
      <h2 class="flex items-center">
        <span flex-1>Projects</span>
        <div
          onClick={openLink}
          class="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer"
        >
          <div class="m-2 i-ri-arrow-right-up-line"></div>
        </div>
      </h2>
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <Index each={projectLists}>
          {(item) => <ProjectItem data={item()} />}
        </Index>
      </div>
    </>
  )
}
