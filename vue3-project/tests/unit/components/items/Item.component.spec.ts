import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils'
import ItemComponent from '@/components/item/children/Item.component.vue';
import { ItemInterface } from '@/models/items/Item.interface';

describe('Item.component.vue',() => {
    it('renders an Item correctly', () => {
        const model: ItemInterface = {
            id: 1,
            name: 'Unit test item 1',
            selected: false
        }

        const wrapper = shallowMount(ItemComponent, {
            props: {
                model: model
            }
        })

        /**
         * Solo valida que en alguna parte del texto renderizado en el componente
         * aparezca 'Unit test item 1' lo cual no es muy preciso
         * */
        // expect(wrapper.text()).to.include('Unit test item 1');

        /**
         * Esta prueba es más precisa, ya que se selecciona el div con el nombre de la clase
         * y se comprueba si muestra el texto correcto
         * */
        const domElement = wrapper.find('div.name');
        expect(domElement.text()).to.equal('Unit test item 1');
    })

    it('has expected css class when selected is false', () => {
       const model: ItemInterface = {
           id: 2,
           name: 'Unit test item 2',
           selected: false
       }

       const wrapper = shallowMount(ItemComponent, {
           props: {
               model: model
           }
       });

       /**
        * Comprobando la lista de clases del componente
        * */
        const classes = wrapper.classes();

        expect(classes).to.be.an('array').that.includes('item');
        expect(classes).to.be.an('array').that.does.not.includes('selected');
    });

    it('has selected css class when selected is true', () => {
       const model: ItemInterface = {
           id: 3,
           name: 'Unit test item 3',
           selected: true
       }

       const wrapper = shallowMount(ItemComponent, {
          props: {
              model
          }
       });

       const classes = wrapper.classes();

       expect(classes).to.be.an('Array').that.includes('item');
       expect(classes).to.be.an('Array').that.includes('selected');

    });
})