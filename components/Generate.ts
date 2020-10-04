function Generate (length = 10, charSet = '') {

  charSet = charSet ? charSet : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^°!"§$%&/()=?`*+~\'#,;.:-_';
  return Array.apply(null, Array(length || 10)).map(function () {
    return charSet.charAt(Math.random() * charSet.length);
  }).join('');
}


export default Generate;