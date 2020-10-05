import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Generate from '../components/Generate';
import Copy2Clipboard from '../components/Copy2Clipboard';

function IndexPage () {
  // The password
  const [pass, setPass] = useState<string>('');
  // The options
  const [option, setOption] = useState<number>(8);

  // Call function Generate and persist result
  function generatePassword (length = option as number) {
    const password = Generate(length)
    setPass(password)
  }

  // Generate password on load page
  useEffect(() => {
    generatePassword()
  }, [])


  // Generate passowrd on button press
  function handlerGenerate (length = option as number) {
    generatePassword(length)
  }

  // Password Length
  function handleChangeLength (event: any) {
    // Set state typeOf number
    setOption(parseInt(event.target.value))
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
          <div className="buttons-wrapper">
            <button onClick={() => handlerGenerate(option)} className="btn-generate">GENERATE PASSWORD</button>
            <button onClick={() => Copy2Clipboard(pass)} className="btn-copy">COPY</button>
          </div>
          <div className="option-wrapper">
            <form action="">
              <div className="option-password">
                Password Length:
                <select
                  name="password-length"
                  id="password-length"
                  onChange={handleChangeLength}
                  defaultValue='8'
                >
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                  <option value="12">12</option>
                  <option value="14">14</option>
                  <option value="16">16</option>
                </select>
              </div>
              {/* <div className="option-password">
                <input type="checkbox" id="check-symbols" />
                <label htmlFor="check-symbols">Include Symbols: ( e.g. @#$% )</label>
              </div>
              <div className="option-password">
                <input type="checkbox" id="check-numbers" />
                <label htmlFor="check-numbers">Include Numbers: ( e.g. 123456 )</label>
              </div>
              <div className="option-password">
                <input type="checkbox" name="check-lowercase" id="check-lowercase" />
                <label htmlFor="check-lowercase">Include Lowercase Characters: ( e.g. abcdefgh )</label>
              </div>
              <div className="option-password">
                <input type="checkbox" name="check-uppercase" id="check-uppercase" />
                <label htmlFor="check-uppercase">Include Uppercase Characters: ( e.g. ABCDEFGH )</label>
              </div>
              <div className="option-password">
                <input type="checkbox" name="check-characters" id="check-characters" />
                <label htmlFor="check-characters">Exclude Ambiguous Characters: ( {} [ ] ( ) / \ ' " ` ~ , ; : .  )</label>
              </div> */}
            </form>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
