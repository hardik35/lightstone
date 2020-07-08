import { shallowMount } from '@vue/test-utils'
import newShapeModal from '@/components/shapes/newShapeModal.vue'

describe('newShapeModal.vue', () => {
  it('return shapeFormConfigurationKeyValue', () => {
    const wrapper = shallowMount(newShapeModal);
    // to-do check if deep clone is even needed or not
    const newFormCopy = JSON.parse(JSON.stringify(wrapper.vm.newShapeForm));
    const newFormCopyConfigurationKeys = Object.keys(newFormCopy);
    // have values set to be in multiple of 100
    for (let i = 0; i < newFormCopyConfigurationKeys.length; i++) {
      newFormCopy[newFormCopyConfigurationKeys[i]].value = (i + 1) * 100;
    }
    expect(wrapper.vm.getShapeFormValues(newFormCopy)).toStrictEqual({
      top: 100,
      left: 200,
      width: 300,
      height: 400,
      name: 500,
    });
  })
})
