import { mount } from '@vue/test-utils'
import Task from '@/components/Task.vue'

describe('Task komponens egységtesztje', () => {
  test('Vue példány-e', () => {
    
    const wrapper = mount(Task, {
      propsData: {
        task: {
          name: 'Task 1',
          completed: false
        } 
      }
    });
    const t = wrapper.findComponent(Task)
    expect(t.exists()).toBe(true)    
  });
});
