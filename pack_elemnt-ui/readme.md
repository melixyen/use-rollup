# 將 element-ui 及 CSS 打成一包
##### 需先執行 npm install

### 1.從 CDN 取得 element-ui 的 js 及 css 放到 src
```HTML
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>

```

### 2.將 CSS 字串全複製起來放入 src/element-css.js 打包
* 整串貼在開頭變數中
* 確認下方有執行加入 head 的 function
* npm run css

### 3.將輸出的 dist/element_css.js 和 element-ui 的 js 合併
* 目標 JS 先放 dist/element_css.js 內容
* 後放 element-ui js 內容

## 完成後只要引用這一支檔案即可
