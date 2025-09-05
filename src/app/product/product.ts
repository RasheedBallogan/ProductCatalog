import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [RouterModule,CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Products {
products = [
  { id: 1, name: "Intel Core i5-12400F", price: 8500, location: "SM Baguio", details: "Brand-New, 6-Core CPU" },
  { id: 2, name: "AMD Ryzen 5 5600X", price: 9800, location: "SM Rosales", details: "Excellent Condition, Unlocked" },
  { id: 3, name: "NVIDIA RTX 3060 12GB", price: 18500, location: "SM Tarlac", details: "Used, Great Performance" },
  { id: 4, name: "ASUS TUF B550M-Plus", price: 6200, location: "SM San Fernando", details: "Brand-New, AM4 Socket" },
  { id: 5, name: "Corsair Vengeance 16GB DDR4", price: 3200, location: "SM Davao", details: "Excellent Condition, 3200MHz" },
  { id: 6, name: "Samsung 970 EVO Plus 1TB", price: 5800, location: "SM Cebu", details: "Brand-New, NVMe SSD" },
  { id: 7, name: "Cooler Master Hyper 212", price: 1800, location: "SM Clark", details: "Used, Cleaned and Functional" },
  { id: 8, name: "Gigabyte RTX 4070 Ti", price: 39500, location: "SM Manila", details: "Brand-New, Triple Fan" },
  { id: 9, name: "MSI MAG B660M Mortar", price: 6900, location: "SM Pampanga", details: "Excellent Condition, LGA1700" },
  { id: 10, name: "Kingston Fury 32GB DDR5", price: 8800, location: "SM Bacolod", details: "Brand-New, 5600MHz" },
  { id: 11, name: "Intel Core i7-13700K", price: 21500, location: "SM Baguio", details: "Unlocked, High Performance" },
  { id: 12, name: "AMD Ryzen 7 5800X", price: 14500, location: "SM Rosales", details: "Used, Excellent Condition" },
  { id: 13, name: "ASRock B450 Steel Legend", price: 5400, location: "SM Tarlac", details: "Good Condition, RGB Support" },
  { id: 14, name: "WD Blue 1TB HDD", price: 2200, location: "SM San Fernando", details: "Used, Tested and Reliable" },
  { id: 15, name: "NZXT H510 Case", price: 3900, location: "SM Davao", details: "Brand-New, Matte Black" },
  { id: 16, name: "EVGA 600W PSU", price: 2500, location: "SM Cebu", details: "Used, Fully Functional" },
  { id: 17, name: "Logitech G502 Hero Mouse", price: 2800, location: "SM Clark", details: "Brand-New, RGB Lighting" },
  { id: 18, name: "Razer BlackWidow V3 Keyboard", price: 5200, location: "SM Manila", details: "Excellent Condition, Mechanical" },
  { id: 19, name: "AOC 24G2 Monitor", price: 7800, location: "SM Pampanga", details: "Used, 144Hz IPS Panel" },
  { id: 20, name: "TP-Link AX3000 WiFi Card", price: 1800, location: "SM Bacolod", details: "Brand-New, PCIe Adapter" },
  { id: 21, name: "Intel Core i3-12100", price: 6200, location: "SM Baguio", details: "Budget CPU, Brand-New" },
  { id: 22, name: "AMD Radeon RX 6600 XT", price: 16500, location: "SM Rosales", details: "Used, Great for 1080p Gaming" },
  { id: 23, name: "Crucial MX500 500GB SSD", price: 2800, location: "SM Tarlac", details: "Excellent Condition, SATA" },
  { id: 24, name: "Thermaltake 650W PSU", price: 3100, location: "SM San Fernando", details: "Brand-New, Modular" },
  { id: 25, name: "DeepCool AK620 Cooler", price: 3600, location: "SM Davao", details: "Excellent Cooling Performance" },
  { id: 26, name: "MSI RTX 3080 Gaming Z", price: 49500, location: "SM Cebu", details: "Used, High-End GPU" },
  { id: 27, name: "ASUS ROG Strix B650E-F", price: 9800, location: "SM Clark", details: "Brand-New, DDR5 Support" },
  { id: 28, name: "G.Skill Trident Z RGB 16GB", price: 4200, location: "SM Manila", details: "Used, RGB DDR4" },
  { id: 29, name: "BenQ EX2510 Monitor", price: 8900, location: "SM Pampanga", details: "Brand-New, 165Hz IPS" },
  { id: 30, name: "Corsair iCUE H100i Cooler", price: 6900, location: "SM Bacolod", details: "Liquid Cooling, RGB" },
];
}