import toteKattesyes from '../assets/images/ToteKattesyes.png';
import accesorioRose from '../assets/images/AccesorioRose.png.png';
import twicePoleron from '../assets/images/TwicePoleron.png.png';
import bts21 from '../assets/images/Bts21.png.png';
import jhopePolera from '../assets/images/J-hopePolera.png.png';
import enhypenPoleron from '../assets/images/PoleronEhnypen.png.png';
import jenniePolera from '../assets/images/JenniePolera.png.png';
import Jhope from '../assets/images/jhope.png';
import JkVerde from '../assets/images/jkVerde.png';
import NewJeans from '../assets/images/newjeens.png';
import JennieBlanco from '../assets/images/JennieBlanco.png';
import LisaRoja1 from '../assets/images/LisaRoja1.png';
import ZicoPolera from '../assets/images/ZicoPolera.png';
import AespaBlanco from '../assets/images/aespaBlanco.png';
import KatseyeNegro from '../assets/images/KatseyeNegro.png';
import TxtBolso from '../assets/images/txtBolso.png';
import JenniePantalones from '../assets/images/JenniePantalones.png';
import LisaTote from '../assets/images/LisaTote.png';
import CortisPulsera from '../assets/images/CortisPulsera.png';

//prob modificar

let products = [
    {
        id: 1,
        badge: "Kattesyes",
        image: toteKattesyes,
        title: "Tote Porcelain",
        description: "KATSEYE's debut EP, SIS.",
        details: "Good chain fits for you.",
        price: 29990,
        originalPrice: 34000,
        category: "Accesorio"
    },
    {
        id: 2,
        badge: "Rosie",
        image: accesorioRose,
        title: "Rose",
        description: "APT. keychain.",
        details: "Good chain fits for you.",
        price: 35990,
        originalPrice: 40000,
        category: "Accesorio"
    },
    {
        id: 3,
        badge: "Twice",
        image: twicePoleron,
        title: "Twice",
        description: "Long sleeve T-shirt.",
        details: "Twice T-shirt for you.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        price: 42500,
        originalPrice: 42500,
        category: "Camiseta"
    },
    {
        id: 4,
        badge: "Bts",
        image: bts21,
        title: "BT21",
        description: "BT21 MININI DOLL KEYRING.",
        details: "100% Cotton Special Jersey",
        price: 19990,
        originalPrice: 21000,
        category: "Accesorio"
    },
    {
        id: 5,
        badge: "J-hope",
        image: jhopePolera,
        title: "J-hope by Tour",
        description: "T-shirt Tour J-hops.",
        details: "By Tour J-Hope for you.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        price: 44990,
        originalPrice: 45000,
        category: "Polera"
    },
    {
        id: 6,
        badge: "Enhypen",
        image: enhypenPoleron,
        title: "Poleron enhypen",
        description: "엔하이픈.",
        details: "Best hoodie for you",
        sizes: ["S", "M", "L", "XL", "XXL"],
        price: 44990,
        originalPrice: 45000,
        category: "Hoodie"
    },
    {
        id: 7,
        badge: "Jennie",
        image: jenniePolera,
        title: "Ruby Photo Tank Top",
        description: "This product is currently on pre-order.",
        details: "A good top to fit",
        sizes: ["S", "M", "L", "XL", "XXL"],
        price: 31500,
        originalPrice: 32000,
        category: "Camiseta"
    },
    {
        id: 8,
        badge: "Jennie",
        image: JenniePantalones,
        title: "Sweatpants",
        description: "Ruby track list printed on the left leg and icons on the right of black.",
        details: "Best Pants",
        sizes: ["S", "M", "L", "XL", "XXL"],
        price: 90000,
        originalPrice: 91000,
        // alt: "Jennie Sweatpants",
        category: "Especial"
    },
    {
        id: 9,
        badge: "J-hope",
        image: Jhope,
        title: "J-hope Hoodie",
        description: "Product NameVarsity Jacket black.",
        details: "100% Cotton Special Hoodie",
        sizes: ["S", "M", "L", "XL", "XXL"],
        price: 40000,
        originalPrice: 41000,
        // alt: "J-hope Hoodie"
        category: "Hoodie"
    },
    {
        id: 10,
        badge: "Jungkook",
        image: JkVerde,
        title: "Jungkook Verde",
        description: "Polerón verde con especial diseño Golden de Jungkook.",
        details: "100% Cotton Special Hoodie",
        sizes: ["S", "M", "L", "XL", "XXL"],
        price: 75000,
        originalPrice: 76000,
        // alt: "Jungkook Hoodie"
        category: "Hoodie"
    },
    {
        id: 11,
        badge: "New Jeans",
        image: NewJeans,
        title: "New Jeans Hoodie",
        description: "Nuevos Jeans NJWMX Sudaderas con Capucha Rabbit Logo Merch Jerseys.",
        details: "Good Jeans",
        sizes: ["S", "M", "L", "XL", "XXL"],
        price: 38500,
        originalPrice: 39000,
        // alt: "New Jeans Hoodie"
        category: "Hoodie"
    },
    {
        id: 12,
        badge: "Jennie",
        image: JennieBlanco,
        title: "Ruby Red Eye Baby Tee",
        description: "Ruby Red Eye design printed on a white, unisex, baby tee.",
        details: "100% Cotton Special Baby Tee",
        sizes: ["S", "M", "L", "XL", "XXL"],
        price: 40000,
        originalPrice: 41000,
        // alt: "Ruby Red Eye Baby Tee"
        category: "Camiseta"
    },
    {
        id: 13,
        badge: "Lisa",
        image: LisaRoja1,
        title: "Alter Ego Comic Jersey",
        description: "Alter Ego Comic Character Jersey.",
        details: "100% Cotton Special Jersey",
        sizes: ["S", "M", "L", "XL", "XXL"],
        price: 75000,
        originalPrice: 76000,
        // alt: "Alter Ego Comic Jersey"
        category: "Camiseta"
    },
    {
        id: 14,
        badge: "Zico",
        image: ZicoPolera,
        title: "S/S T-Shirt (Charcoal)",
        description: "Long sleeve T-shirt in charcoal color.",
        details: "100% Cotton Special",
        sizes: ["S", "M", "L", "XL", "XXL"],
        price: 38500,
        originalPrice: 39000,
        // alt: "S/S T-Shirt (Charcoal)"
        category: "Camiseta"
    },
    {
        id: 15,
        badge: "Aespa",
        image: AespaBlanco,
        title: "Aespa Bolso",
        description: "Aespa-Synk : Aexis Line 2025 Live Tour Official MD.",
        details: "Size: 55 x 85 mm, Material: PA. Random Trading Card Set X Version included.",
        price: 14327,
        originalPrice: 15000,
        // alt: "Aespa Bolso"
        category: "Accesorio"
    },
    {
        id: 16,
        badge: "Katseye",
        image: KatseyeNegro,
        title: "Katseye Bolso",
        details: "100% Cotton",
        description: "Bolso Katseye exclusivo.",
        price: 25000,
        originalPrice: 34000,
        // alt: "Katseye Bolso"
        category: "Accesorio"
    },
    {
        id: 17,
        badge: "TXT",
        image: TxtBolso,
        title: "Bolso TXT",
        description: "MINI CROSS BAG.",
        details: "100% Cotton",
        price: 38500,
        originalPrice: 39000,
        // alt: "TXT Bolso"
        category: "Accesorio"
    },
    {
        id: 18,
        badge: "Lisa",
        image: LisaTote,
        title: "Alter Ego Comic Tote",
        description: "Alter Ego Comic Tote.",
        details: "100% Cotton, 6oz, 14.7×14.9",
        price: 25000,
        originalPrice: 32000,
        // alt: "Lisa Tote"
        category: "Especial"
    },
    {
        id: 19,
        badge: "Cortis",
        image: CortisPulsera,
        title: "CORTIS The 1st EP",
        description: "CORTIS Official Goods.",
        details: "Official merchandise from CORTIS. Limited edition item.",
        price: 45500,
        originalPrice: 45500,
        // alt: "Cortis Pulsera"
        category: "Especial"
    }
];


export default products;