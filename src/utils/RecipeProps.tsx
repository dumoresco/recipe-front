export interface Recipe {
  id?: string;
  name: string;
  img_path: string;
  category: string;
  ingredients?: [
    {
      name: string;
      amount: string;
    }
  ];
  preparing: string;
  portion: number;
  rating: number;
  difficulty: string;
  preparation_time: string;
}
