// data/sidebarData.ts
// Data/menuData.ts

export interface SidebarItem {
  id: number;
  src: string;
  alt: string;
  href: string;
  details: string[]; // New field for list of details
}

export const sidebarData: SidebarItem[] = [
  { id: 1, src: '/assets/imgs/template/monitor.svg', alt: 'Home', href: '#', details: ['Computer Accesories', 'Computer cases','HDD','RAM','Headphones'] },
  { id: 2, src: '/assets/imgs/template/mobile.svg', alt: 'Mobile', href: '#', details: ['Phone Accessories', 'Phone Cases', 'Unlocked Phones', 'Prepaid Plans', 'Refurbished Phones', 'Straight Talk', 'iPhone', 'Samsung', 'Samsung Galaxy', 'Samsung Accessories'] },
  { id: 3, src: '/assets/imgs/template/game.svg', alt: 'Game', href: '#', details: ['Wireless Routers', 'Cool New Gadgets', 'Tech and Gadgets', 'Geek Gifts and Gadgets', 'Xbox Accessories', 'PlayStation Accessories'] },
  { id: 4, src: '/assets/imgs/template/clock.svg', alt: 'Clock', href: '#', details: ['Smart Watches', 'Fashion Smart Watches', 'Smart Bracelets', 'Pocket Watches', 'Smart Rings', 'Other Watches'] },
  { id: 5, src: '/assets/imgs/template/airpod.svg', alt: 'AirPod', href: '#', details: ['On-Ear Headphones', 'Earbud & In-Ear', 'DJ Headphones', 'PC Accessories', 'PC Game Headsets'] },
  { id: 6, src: '/assets/imgs/template/airpods.svg', alt: 'AirPods', href: '#', details: ['On-Ear Headphones', 'Earbud & In-Ear' ,'DJ Headphones' ,'PC Accessories' ,'PC Game Headsets'] },
  { id: 7, src: '/assets/imgs/template/mouse.svg', alt: 'Mouse', href: '#', details: ['Logitech', 'Redragon', 'Amazon Basics', 'Microsoft', 'MageGee'] },
  { id: 8, src: '/assets/imgs/template/music-play.svg', alt: 'Music Play', href: '#', details: ['Car Audio Systems', 'Cellphones', 'Desktops', 'Gaming Consoles', 'Telephones'] },
  { id: 9, src: '/assets/imgs/template/bluetooth.svg', alt: 'Bluetooth', href: '#', details: ['Player Accessories', 'Computer Accessories', 'Speakers & Audio', 'Computer Networking', 'Movies & Films'] },
  { id: 10, src: '/assets/imgs/template/clound.svg', alt: 'Cloud', href: '#', details: ['Android', 'Linux & Unix', 'Macintosh', 'Windows', 'iPhone & iOS'] },
  { id: 11, src: '/assets/imgs/template/electricity.svg', alt: 'Electricity', href: '#', details: ['Antenna Toppers', 'Automotive Body Armor', 'Power Inverter', 'Gas Tank Doors', 'Hood Scoops & Vents'] },
  { id: 12, src: '/assets/imgs/template/cpu.svg', alt: 'CPU', href: '#', details: ['Computer CPU Processors', 'Internal Fans & Cooling', 'Graphics Cards', 'Network I/O Port Cards', 'Internal Memory Card'] },
  { id: 13, src: '/assets/imgs/template/devices.svg', alt: 'Devices', href: '#', details: ['Graphic PC', 'Office PC', 'Gaming PC', 'Server'] },
  { id: 14, src: '/assets/imgs/template/driver.svg', alt: 'Driver', href: '#', details: ['JBL','Anker','Pyle','Bose','Logitech'] },
  { id: 15, src: '/assets/imgs/template/lamp.svg', alt: 'Lamp', href: '#', details: ['Copyholders', 'Office Bookends', 'Business Card Holders', 'Lap Desks', 'Mouse Pads'] },
];

