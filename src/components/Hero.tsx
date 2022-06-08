import Socials from './Socials'
import helloWordArr from '~/lib/hello'

export default () => {
  const helloWord = helloWordArr[Math.floor((Math.random() * helloWordArr.length))]
  
  return (
    <header>
      <h1>
        <span class="block">{helloWord}, </span>
        <span class="block mt-2">I'm Koya.</span>
      </h1>
      <div mt-6>
        <div>
          <span>前端开发者</span>
        </div>
        <div mt-2>
          <span>目前在讨饭吃.</span>
        </div>
        <div mt-2>
          <span>吃饭、睡觉、写 Bug，梦想是不工作都有钱花</span>
        </div>
      </div>
      <Socials />
    </header>
  )
}