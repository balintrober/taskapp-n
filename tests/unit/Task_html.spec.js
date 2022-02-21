import { mount } from '@vue/test-utils'
import Task from '@/components/Task.vue'

describe('Task komponens egységtesztje', () => {
  test('HTML elem tartalmazza-e a feladat nevét', () => {
    const taskName = 'Feladat';
    const wrapper = mount(Task, {
      propsData: {
        task: {
          title: taskName,
          completed: false
        } 
      }
    });
    expect(wrapper.html()).toContain(taskName);   
    });
});
