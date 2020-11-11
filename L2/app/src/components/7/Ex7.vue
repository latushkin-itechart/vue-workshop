<template>
  <div>
    <div class="my-4">
      <h5>Simple toggler</h5>
      <button class="btn btn-primary btn-sm my-2" @click="stub0 = !stub0">Toggle</button>
      <StubContent v-if="stub0"/>
    </div>

    <div class="my-4">
      <h5>Fade toggler</h5>
      <button class="btn btn-primary btn-sm my-2" @click="stub1 = !stub1">Toggle</button>

      <transition name="fade-transition">
        <StubContent v-if="stub1"/>
      </transition>
    </div>

    <div class="my-4">
      <h5>Slide toggler</h5>
      <button class="btn btn-primary btn-sm my-4" @click="stub2 = !stub2">Toggle</button>

      <transition name="slide-transition">
        <StubContent v-if="stub2"/>
      </transition>
    </div>
  </div>
</template>

<script>
import StubContent from "./StubContent";
export default {
  name: "Ex7",
  components: {StubContent},
  data() {
    return {
      stub0: true,
      stub1: true,
      stub2: true,
    }
  }
}
</script>

<style>
.fade-transition-enter-active,
.fade-transition-leave-active {
  transition: opacity .5s;
}

.fade-transition-enter,
.fade-transition-leave-to {
  opacity: 0;
}

.slide-transition-enter-active {
  transition: 2s transform;
}
.slide-transition-leave-active {
  transition: .4s transform;
}

.slide-transition-enter,
.slide-transition-leave-to
{
  transform: scale(0);
}
.slide-transition-enter-to,
.slide-transition-leave-to {
  transform-origin: top left;

}
</style>