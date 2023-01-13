export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>

      <script
        dangerouslySetInnerHTML={{
          __html: `
        ;(async () => {
          const response = await fetch('/', {
            method: 'options',
          });
          console.log('OPTIONS response: ', response)
        })()
        `,
        }}
      />
    </div>
  )
}
