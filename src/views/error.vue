<template>
  <div style="background:#f0f2f5;height:100%;overflow:hidden;">
    <div class="wscn-http404">
      <div class="pic-404">
        <div class="pic-bg"></div>
      </div>
      <div class="bullshit">
        <div class="bullshit__oops">OOPS!</div>
        <div class="bullshit__headline">这个页面找不到了......</div>
        <div class="bullshit__info">请检查您输入的网址是否正确，请点击下面按钮</div>
        <div class="bullshit__btn">
          <a href="/" @click.prevent="$router.go(-1)" class="bullshit__return-home">返回上一页</a>
          <a href="/" @click.prevent="$router.push('/login')" class="return-login">返回登录页</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wscn-http404 {
  position: relative;
  width: 1200px;
  margin: 50px auto 60px;
  padding: 0 100px;
  overflow: hidden;
}
.pic-404 {
  position: relative;
  float: left;
  width: 50%;
  padding: 150px 0;
  overflow: hidden;
}
.pic-bg {
  height: 300px;
  background: url('https://github.com/hweilp/hwhtml.github.io/blob/master/assest/404.png?raw=true')
    no-repeat center;
  background-size: contain;
}
.pic-404__parent {
  width: 100%;
}
.pic-404__child {
  position: absolute;
}
.left {
  width: 80px;
  top: 17px;
  left: 220px;
  opacity: 0;
  animation-name: cloudLeft;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-delay: 1s;
}
.mid {
  width: 46px;
  top: 10px;
  left: 420px;
  opacity: 0;
  animation-name: cloudMid;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-delay: 1.2s;
}
.right {
  width: 62px;
  top: 100px;
  left: 500px;
  opacity: 0;
  animation-name: cloudRight;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-delay: 1s;
}
@keyframes cloudLeft {
  0% {
    top: 17px;
    left: 220px;
    opacity: 0;
  }
  20% {
    top: 33px;
    left: 188px;
    opacity: 1;
  }
  80% {
    top: 81px;
    left: 92px;
    opacity: 1;
  }
  100% {
    top: 97px;
    left: 60px;
    opacity: 0;
  }
}
@keyframes cloudMid {
  0% {
    top: 10px;
    left: 420px;
    opacity: 0;
  }
  20% {
    top: 40px;
    left: 360px;
    opacity: 1;
  }
  70% {
    top: 130px;
    left: 180px;
    opacity: 1;
  }
  100% {
    top: 160px;
    left: 120px;
    opacity: 0;
  }
}
@keyframes cloudRight {
  0% {
    top: 100px;
    left: 500px;
    opacity: 0;
  }
  20% {
    top: 120px;
    left: 460px;
    opacity: 1;
  }
  80% {
    top: 180px;
    left: 340px;
    opacity: 1;
  }
  100% {
    top: 200px;
    left: 300px;
    opacity: 0;
  }
}
.bullshit {
  position: relative;
  float: left;
  width: 50%;
  padding: 210px 0;
  overflow: hidden;
  text-align: left;
}
.bullshit__oops {
  font-size: 32px;
  font-weight: bold;
  line-height: 40px;
  color: #1482f0;
  opacity: 0;
  margin-bottom: 20px;
  animation-name: slideUp;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
.bullshit__headline {
  font-size: 20px;
  line-height: 24px;
  color: #1482f0;
  opacity: 0;
  margin-bottom: 10px;
  animation-name: slideUp;
  animation-duration: 0.5s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
}
.bullshit__info {
  font-size: 13px;
  line-height: 21px;
  color: grey;
  opacity: 0;
  margin-bottom: 30px;
  animation-name: slideUp;
  animation-duration: 0.5s;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
}
.bullshit__return-home {
  display: inline-block;
  width: 110px;
  height: 36px;
  background: rgb(20, 130, 240);
  border-radius: 100px;
  text-align: center;
  color: #ffffff;
  opacity: 0;
  font-size: 14px;
  line-height: 36px;
  cursor: pointer;
  animation-name: slideUp;
  animation-duration: 0.5s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
}
.bullshit__return-home:hover {
  background: rgba(20, 130, 240, 0.8);
}
.return-login {
  display: inline-block;
  margin-left: 20px;
  width: 110px;
  height: 36px;
  background: rgb(144, 147, 153);
  border-radius: 100px;
  text-align: center;
  color: #ffffff;
  opacity: 0;
  font-size: 14px;
  line-height: 36px;
  cursor: pointer;
  animation-name: slideUp;
  animation-duration: 0.5s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
}
.return-login:hover {
  background: rgba(144, 147, 153, 0.8);
}
@keyframes slideUp {
  0% {
    transform: translateY(60px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

