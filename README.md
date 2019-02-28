# 1.Install nvm
```bash
sudo apt-get update
sudo apt-get install build-essential libssl-dev  
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash
```
Windows 10 can go to Windows Store and install Windows Subsystem Linux first.


# 2.Use NVM install node.js
```sh
nvm ls-remote
nvm install @version # of ls-remote
nvm use @version
```


# 3.Install by NPM
```sh
cd project
npm install
```


# 4.Run rollup
```sh
npm run umd # //Build AMD CMD Global of js
npm run es # //Build ES Module
npm run iife # //Build browser script tag include directly javascript file
```


# 5.Must Check 需改的設定內容
### rollup.config.js
```javascript
config.input = 'src/main.js'  //-> entry, default use package.json.module change to your main file 預設入口位置
config.output.file = 'dist/fm.js'  //-> Output file name and path 輸出檔案位置及檔名
config.output.format = 'umd'  //-> Output format 輸出格式
config.output.name = 'arrayMath'  //-> Global variable name, change to your name, it will be window.arrayMath 指定輸出的 global name

config.plugins = []  //-> You must add any used plugins in this config, even it on rollup.config.js 設定要裝的套件，包括預設有裝的都要寫一次完整的內容.

config.output.banner = commentString; //commentString will auto read package.json and get name / version / description ... to print on the top banner. 此區域會從 package.json 讀取設定並印到開頭宣告註解內
```

### custom define cli parameter  --flag-* (自定義命令參數 --flag-* )
```sh
--flag-use-minify  #-> call babel-minify (是否要壓縮 code)
--flag-use-banner  #-> call config.output.banner = commentString; (是否要附帶開頭宣告)
```

# Links (其他說明連結)
[Rollup doc](https://rollupjs.org/guide/zh#introduction)
<br>
[rollup-plugin-babel](https://github.com/rollup/rollup-plugin-babel)
<br>
[rollup-plugin-babel-minify](https://www.npmjs.com/package/rollup-plugin-babel-minify)



