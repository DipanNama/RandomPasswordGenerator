import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Generate from '../components/Generate';

function IndexPage () {
  // The password
  const [pass, setPass] = useState<String>('');

  // Call function Generate and persist result
  function generatePassword (length = 10 as number) {
    const password = Generate(length)
    setPass(password)
  }

  // Generate password on load page
  useEffect(() => {
    generatePassword()
  }, [])

  // Generate passowrd on button press
  function handlerGenerate (length = 10 as number) {
    generatePassword(length)
  }

  const Password = (): JSX.Element => {
    return <>{pass}</>;
  }

  return (
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
}

export default IndexPage
