<template>
  <div>
    <p>Number formatted: {{ numericValue * 2 | dollars }}</p>
    <p>Date value: {{ dateValue | withWeekday }}</p>
    <p>String value: {{ strValue | uppercase }}</p>
  </div>
</template>

<script>
export default {
  name: "Example5_1",
  data() {
    return {
      numericValue: Math.round(Math.random() * (10 ** 6) + 10 ** 7),
      dateValue: new Date(),
      strValue: 'Lorem ipsum dolor sit amet'
    }
  },
  filters: {
    dollars(val) {
      const formatter = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'USD'
      })
      return formatter.format(val)
    },

    withWeekday(date) {
      const formatter = new Intl.DateTimeFormat('ru-RU', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
      return formatter.format(date);
    },

    uppercase(value) {
      return String(value).toUpperCase()
    }
  }
}
</script>