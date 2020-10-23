/**
 * Mocking client-server processing
 */
const defaultSearchEngine = 'baidu'
const defaultSCName = '添加链接'
const defaultIconUrl = '../../assets/img/searchEngineIcon/add.svg'
const bgcUrlPc = "url(" +
  require("../assets/img/background_PC/" + Math.floor(Math.random() * 30 + 1) + ".jpg") +
  ")";
const bgcUrlMb = "url(" +
  require("../assets/img/background_MB/" + Math.floor(Math.random() * 30 + 1) + ".jpg") +
  ")";
const baiduIcon = "../assets/img/searchEngineIcon/baidu.png"
const bingIcon = "../assets/img/searchEngineIcon/bing.png"
const googleIcon = "../assets/img/searchEngineIcon/google.png"
export {
  defaultSearchEngine, 
  defaultSCName, 
  defaultIconUrl,
  bgcUrlPc,
  bgcUrlMb,
  baiduIcon,
  bingIcon,
  googleIcon
}

const getProducts = function(){
  setTimeout(() => cb(_products), 100)
}

export default {
  
  getProducts,
  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.webdriver)
        ? cb()
        : errorCb()
    }, 100)
  },
}
