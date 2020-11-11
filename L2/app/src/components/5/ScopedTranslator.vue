<template>
  <table class="table-bordered">
    <thead>
      <tr>
        <th>Russian</th>
        <th>English</th>
        <th>Magyar</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>
          <slot name="ru" :translate="ru"></slot>
        </td>
        <td>
          <slot name="en" :translate="en"></slot>
        </td>
        <td>
          <slot name="hu" :translate="hu"></slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "ScopedTranslator",
  props: ['text'],
  data() {
    return {
      ru: 'Страна',
      en: 'Country',
      hu: 'Ország'
    }
  }
}
</script>