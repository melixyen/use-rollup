import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';


var config = {
  input: pkg.module,//'src/main.js', //entry 進入口主文件位置，預設讀取自 package.json module
  output: {
    file: 'dist/element_ui_css_pack.js',
    name: 'ELEMENT', // Importnat , umd and iife format use this value to be global variable name. 全域變數名稱
    format: 'umd'
  },
  //external: ['vue','jQuery',path.resolve( './src/some-local-file.js' )],//不想要包進去的 library
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**' // Do not translate node modules 不轉換此內容之 code
    })
  ]
};

// ****** Custom control export config rule start ******
var options = process.argv;//Get cli parameter 取得執行命令帶的參數
var format = 'umd';
var flagMinify = false;//Set true or cli add --flag-use-minify to minify output code. 設為 true 或執行命令加參數 --flag-use-minify 以便將輸出檔案壓縮
var flagBanner = false;//Set true or cli add --flag-use-banner to add banner comment. 設為 true 或執行命令加參數 --flag-use-banner 以便將輸出檔頭加上宣告註解
options.forEach(function(c, idx, arr){
  if(c=='-f' || c=='--output.format'){
    format = arr[idx+1];
  }else if(c=='--flag-use-minify'){
    flagMinify = true;
  }else if(c=='--flag-use-banner'){
    flagBanner = true;
  }
});


// *** Check if use minify
if(flagMinify && format!='es'){
  config.plugins.push(minify());
}
// ****** Custom control export config rule end ******

export default config;