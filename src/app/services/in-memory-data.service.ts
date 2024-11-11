import { InMemoryDbService } from 'angular-in-memory-web-api';
import {smartPhone} from "../../shared/models/smartphone";

export class InMemoryDataService implements InMemoryDbService {
createDb(): {smartphones:smartPhone[]}{
  const smartphones: smartPhone[] = [
    { model: "iPhone 16", color: "Black", size: 6.1, price: 799, isWaterproof: true },
    { model: "Samsung Galaxy F22", color: "White", size: 6.2, price: 699, isWaterproof: true },
    { model: "Google Pixel 9", color: "Sorta Sage", size: 6.4, price: 599, isWaterproof: true },
    { model: "Vivo", color: "Astral Black", size: 6.55, price: 729, isWaterproof: false }
    // Add more as needed
  ];
  return { smartphones };
}
}
