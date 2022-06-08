export default () => {
  return (
    <footer mt-12>
      <p text-sm op-40>
        Douni.one © {new Date().getFullYear()} Code&Design Fork 
        <a
          class="transition-colors decoration-none hover:bg-gray-100 dark:hover:bg-gray-50/10"
          href='https://ddiu.io/'
          target="_blank"
        >
          Diu
        </a>
      </p>
    </footer>
  )
}