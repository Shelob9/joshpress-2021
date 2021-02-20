

export default function Home() {
  return (
    <>
      <>
        <h1>
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
        <div>
          <p>Hi Roy</p>
        </div>
        <div>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input name="name" />
            </div>
            <div>
              <label htmlFor="type">Type</label>
              <select name="type" >
                <option>One</option>
                <option>Twp</option>
              </select>
            </div>
          </form>
        </div>
        <div>
          <button>Button</button>
          <button className={'primary'}>Primary</button>

        </div>
      </>
    </>
  )
}
