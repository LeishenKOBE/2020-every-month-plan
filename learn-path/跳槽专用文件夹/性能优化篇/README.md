# 性能优化

## 网络篇

1. 减少请求的数量
2. 减少请求前准备的时间、请求携带的数据和响应体的大小
3. 提前准备好数据、数据的复用
4. 请求尽量并行，减少串行

### HTTP 请求

1. 尽量避免重定向
   > 每一次的重定向都会进行一次完整的 http/https 流程，网络上的耗时就会占用大部分时间
2. DNS 预解析
   > 利用 dns-prefetch，使页面加载时，同步在后台进行 dns 预解析
   > 将应用中用到的域名配置 dns 预解析，降低初次请求时 dns 解析的时间
   ```html
   <link rel="dns-prefetch" href="//s1.qhimg.com" />
   ```
3. 资源预处理

   (1) 资源 prefetch
   页面加载时，同步在后台进行资源的下载

   ```html
   <link rel="prefetch" href="assets/index.png" />
   <link rel="prefetch" href="second.video" />
   ```

   (2) 资源 preload

   ```text
   页面加载过程中（在浏览器的主渲染机制介入前），进行资源的下载
   对于有些资源是在页面加载完成后是即可需要的，可以配置为preload，常用的有字体文件，首屏用到的css，js等
   ```

   ```html
   <link rel="preload" href="main.css" />
   <link rel="preload" href="main.js" />
   <link rel="preload" href="fonts/index.eot" />
   ```

4. HTTP 缓存：强缓存与协商缓存

5. 减少 HTTP 请求
   对 js、css 等静态资源进行合并，比如几个 css 文件合并成 1 个 css 文件。  
   css 中用到的一些小图标合并成雪碧图。  
   base64 的使用：一些复用性不高的小图片可以转成 base64，减少 http 的请求数。  
   可以使用 css 实现的效果就不要用图片来解决。
6. 减小请求头的大小：合理管理使用 cookie 和域名
   - 对 cookie 的写入进行管理，禁止太大对内容和非必要的内容对 cookie 进行写入
   - 对 cookie 写入对域名进行管理，根域名的 cookie 写入需要进行严格限制
