<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col cols="6">
          <v-card>
            <v-card-title class="d-block">
              <h4>{{ $t('app.name') }}</h4>
              <p>
                <v-select
                  :items="[{text: $t('lang.en'), value: 'en'}, {text: $t('lang.ru'), value: 'ru'}]"
                  @input="onChangeLocale"
                  v-model="locale"
                />
              </p>
            </v-card-title>
            <v-card-text>
              <v-text-field :label="$t('form.name')" :placeholder="$t('form.namePlaceholder')"/>
              <v-text-field :label="$t('form.age')" :placeholder="$t('form.agePlaceholder', {age: 18})" />
              <v-text-field :label="$t('form.donation')" :placeholder="$t('form.donationPlaceholder')" v-model="donation" />

              <p>{{ $t('app.receive') }} {{ count }} {{ $tc('app.gift', count) }} </p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="onSubmit">{{ $t('actions.submit') }}</v-btn>
              <v-btn color="secondary">{{ $t('actions.discard') }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      locale: this.$i18n.locale,
      donation: '',
    }
  },
  computed: {
    count() {
      return Math.floor(Number(this.donation) / 10)
    }
  },
  methods: {
    onChangeLocale() {
      this.$i18n.locale = this.locale;
    },
    onSubmit() {
      window.alert(this.$t('app.submit'))
    }
  }
}
</script>
