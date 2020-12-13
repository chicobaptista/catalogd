export class Item {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  additionalFields: ItemField[];
}

class ItemField {
  name: string;
  value: any;
}
