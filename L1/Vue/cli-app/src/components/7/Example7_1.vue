<template>
  <div>
    <p :style="{color: 'red', fontSize: '20px'}">Red text with 20px font size</p>
    <p :style="bindedStyles">Programmatically set styles</p>
    <p :style="{color: 'green'}" style="font-family: Arial">Mixed styles application</p>
    <p :style="[source1, source2]">Merged styles from several sources</p>
  </div>
</template>

<script>
export default {
  name: "Example7_1",
  data() {
    return {
      bindedStyles: {
        color: '#572485',
        fontSize: '25px',
        boxSizing: 'border-box',
      },
      source1: {
        color: 'orange'
      },
      source2: {
        fontSize: '2rem'
      }
    }
  },

  mounted() {
    setInterval(() => {
      const x = Math.round(Math.random() * 4)
      this.bindedStyles.color = ['red','yellow', 'green', '#883925', '#184955'][x]
    }, 1000)
  }
}
</script>