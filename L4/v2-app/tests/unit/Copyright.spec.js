import {render, fireEvent} from '@testing-library/vue';
import Copyright from "../../src/components/ui/Copyright.vue";


test('Copyright value is correct', () => {
  const component = render(Copyright, {
    propsData: {
      name: 'Google'
    }
  });

  assert(component.baseElement.textContent.includes('Google'))
  assert(component.baseElement.textContent.includes(new Date().getFullYear() + ''));

})