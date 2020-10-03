import Layout from '../components/Layout'
import Generate from '../components/Generate'

function handlerGenerate (length = 10 as number) {
  // Generate
  const password = Generate(length)
  return password
}

const Password = (): JSX.Element => {
  return <>{handlerGenerate()}</>;
}

const IndexPage = () => (
  <Layout title="Random Password Generator">
    <main className="main-content">
      <div className="password-wrapper">
        <span className="password">
          <Password />
        </span>
        <button onClick={() => handlerGenerate(12)} className="btn-generate">GENERATE PASSWORD</button>
      </div>
    </main>
  </Layout>
)

export default IndexPage
