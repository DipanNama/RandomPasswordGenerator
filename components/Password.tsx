import React from 'react'

function generate (length = 10, charSet = '') {
  charSet = charSet ? charSet : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^°!"§$%&/()=?`*+~\'#,;.:-_';
  return Array.apply(null, Array(length || 10)).map(function () {
    return charSet.charAt(Math.random() * charSet.length);
  }).join('');
}

const Password = (): JSX.Element => {
  return <>{generate()}</>;
}

export default Password;