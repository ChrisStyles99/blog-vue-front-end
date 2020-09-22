<template>
  <div class="about">
    <div class="text-div">
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
        placeat saepe rem veritatis optio tenetur, vero expedita magnam
        voluptatum accusamus?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, delectus exercitationem vero repudiandae impedit amet excepturi, quod facilis accusantium fugiat saepe suscipit sequi necessitatibus sapiente porro cupiditate esse doloribus? Nihil.
      </p>
    </div>
    <img
      src="https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg"
      alt=""
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  height: 100vh;
  position: relative;
  margin: auto;

  &::after {
    content: '';
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
  }

  .text-div {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    border-radius: 24px;
    background-color: #ffffff15;

    h1 {
      font-size: 4rem;
      text-align: center;
    }

    p {
      margin-left: 10px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
