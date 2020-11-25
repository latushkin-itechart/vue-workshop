<template>
  <div>
    <h4>Additional information</h4>
    <p>A ante non vel ligula nascetur phasellus lectus mus ullamcorper dolor adipiscing sem pharetra parturient arcu
      venenatis per</p>
    <Copyright name="iTechArt"/>
    <p>
      <label>
        <input v-model="agree"/>
        <span>
          {{ agree ? 'I agree with the terms of use.' : 'Please, check this box to continue service usage' }}
        </span>
      </label>
    </p>
  </div>
</template>

<script>
import Copyright from "../ui/Copyright";

export default {
  name: "StaticInfo",
  components: {Copyright},
  data() {
    return {
      agree: false,
    }
  }
}
</script>