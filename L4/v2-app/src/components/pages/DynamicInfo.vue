<script>

import Copyright from "../ui/Copyright";

export default {
  name: "DynamicInfo",
  data() {
    return {
      agree: false,
    }
  },
  render(createElement, context) {
    const h = createElement;
    const self = this;

    return h('div', [
      h('h4', 'Additional Information'),
      h('p', 'A ante non vel ligula nascetur phasellus lectus mus ullamcorper dolor adipiscing sem pharetra parturient arcu venenatis per.'),
      h(Copyright, {
        props: {
          name: 'iTechArt'
        }
      }),
      h('p', [
        h('label', [
          h('input', {
            attrs: {
              type: 'checkbox'
            },
            domProps: {
              checked: self.agree,
            },
            on: {
              input(e) {
                self.agree = e.target.checked
              }
            }
          }),
          h('span', self.agree ? 'I agree with the terms of use.' : 'Please, check this box to continue service usage')
        ])
      ])
    ]);
  }
}
</script>
