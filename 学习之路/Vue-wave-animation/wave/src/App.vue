<!--
 *                   ___====-_  _-====___
 *             _--^^^#####//      \\#####^^^--_
 *          _-^##########// (    ) \\##########^-_
 *         -############//  |\^^/|  \\############-
 *       _/############//   (@::@)   \############\_
 *      /#############((     \\//     ))#############\
 *     -###############\\    (oo)    //###############-
 *    -#################\\  / VV \  //#################-
 *   -###################\\/      \//###################-
 *  _#/|##########/\######(   /\   )######/\##########|\#_
 *  |/ |#/\#/\#/\/  \#/\##\  |  |  /##/\#/  \/\#/\#/\#| \|
 *  `  |/  V  V  `   V  \#\| |  | |/#/  V   '  V  V  \|  '
 *     `   `  `      `   / | |  | | \   '      '  '   '
 *                      (  | |  | |  )
 *                     __\ | |  | | /__
 *                    (vvv(VVV)(VVV)vvv)
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *                神兽保佑            永无BUG
 -->

<template>
  <div id="app">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = window.innerHeight);
    const drawWave = (width, height) => {
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.moveTo(width, height - 340);
      ctx.lineTo(width, h);
      ctx.lineTo(0, h);
      ctx.lineTo(0, height - 320);
      ctx.bezierCurveTo(
        width / 6,
        height - 280,
        width / 3,
        height - 260,
        width / 2,
        height - 280
      );
      ctx.bezierCurveTo(
        (width * 2) / 3,
        height - 320,
        (width * 5) / 6,
        height- 300,
        width,
        height-280
      );
      ctx.closePath();
      ctx.fillStyle = "rgba(140,160,255,0.3)";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(width, height - 340);
      ctx.lineTo(width, h);
      ctx.lineTo(0, h);
      ctx.lineTo(0, height - 270);
      ctx.bezierCurveTo(
        width / 6,
        height - 380,
        width / 3,
        height - 340,
        width / 2,
        height - 300
      );
      ctx.bezierCurveTo(
        (width * 2) / 3,
        height - 260,
        (width * 5) / 6,
        height - 400,
        width,
        height - 360
      );
      ctx.closePath();
      ctx.fillStyle = "rgba(140,160,255,0.4)";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(width, height - 340);
      ctx.lineTo(width, h);
      ctx.lineTo(0, h);
      ctx.lineTo(0, height - 250);
      ctx.bezierCurveTo(
        width / 6,
        height - 360,
        width / 3,
        height - 320,
        width / 2,
        height - 280
      );
      ctx.bezierCurveTo(
        (width * 2) / 3,
        height - 240,
        (width * 5) / 6,
        height - 380,
        width,
        height - 340
      );
      ctx.closePath();
      ctx.fillStyle = "#3F92FF";
      ctx.fill();
      window.requestAnimationFrame(function() {
        drawWave(width, height);
      });
      
    };
    drawWave(w, h);
  }
  // 动画不完美啊
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
}
</style>
