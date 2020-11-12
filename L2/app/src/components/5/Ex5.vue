<template>
  <div>
    <h3> Slots example </h3>
    <hr/>
    <SlotHeader>Header component with <b>sloting</b> content</SlotHeader>
    <hr/>
    <NotificationsCounter>
      Notifications
      <template v-slot:badge>{{ count }}</template>
    </NotificationsCounter>
    <hr/>

    <ScopedTranslator text="Страна">
      <template v-slot:ru="{ translate, x }">
        <span class="text-primary">{{ translate }}</span>
      </template>
      <template v-slot:en="{ translate }">
        <span class="text-secondary">{{ translate }}</span>
      </template>
      <template v-slot:hu="{ translate }">
        <span class="text-warning">{{ translate }}</span>
      </template>
    </ScopedTranslator>

  </div>
</template>

<script>
import SlotHeader from "./SlotHeader";
import NotificationsCounter from "./NotificationsCounter";
import ScopedTranslator from "./ScopedTranslator";

export default {
  name: "Ex5",
  components: {ScopedTranslator, NotificationsCounter, SlotHeader},
  data() {
    return {
      count: Math.round(Math.random() * 10 + 10)
    }
  }
}
</script>