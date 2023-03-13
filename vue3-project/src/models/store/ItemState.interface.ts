import { ItemInterface } from '@/models/items/Item.interface';

/**
 * @name ItemStateInterface
 * @description
 * Interfaz para el estado de Items
 **/

export interface ItemStateInterface {
    loading: boolean,
    items: ItemInterface[]
}