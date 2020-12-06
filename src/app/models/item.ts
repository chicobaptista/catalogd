export class Item {
  id: string;
  title: string;
  subtitle: string;
  additionalFields: ItemField[];
}

class ItemField {
  name: string;
  value: any;
}
