import { Item } from 'src/app/models/item';

export class ItemFactory {
    public generateItem(id = '1'): Item {
        return {
            id,
            title: 'test1',
            subtitle: 'testing title',
            additionalFields: [],
            image: 'assets/icon/folder-open-outline.svg'
        };
    }
}
