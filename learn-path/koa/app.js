const koa = require("koa");

const app = new koa();

// 配置路由

// 中间件
app.use(async (ctx) => {
  ctx.body = "Hello world";
});

app.listen(3000);
