import { useState } from "react";

const RAW_DATA = [
  // Stickers
  { category: "Stickers", name: "Paint Duckie Matte", sku: "STK-001", sold: 5, starting: 5, left: 0, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Lily of the Valley Glitter", sku: "STK-002", sold: 3, starting: 3, left: 0, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Bunni and Kat <3 Sparkle", sku: "STK-003", sold: 3, starting: 3, left: 0, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Sketch Eepy Kat Matte", sku: "STK-004", sold: 3, starting: 6, left: 3, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Serenity the Cat Holographic Glossy", sku: "STK-005", sold: 4, starting: 4, left: 0, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Yippie Bunni Glitter", sku: "STK-006", sold: 8, starting: 8, left: 0, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Yippie Ribbon Bunni Glitter", sku: "STK-007", sold: 1, starting: 1, left: 0, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Doodle Bunni On Back Glitter", sku: "STK-008", sold: 4, starting: 4, left: 0, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Doodle Bunni Twins Glitter", sku: "STK-009", sold: 8, starting: 8, left: 0, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Doodle Bunni All Four Glitter", sku: "STK-010", sold: 3, starting: 3, left: 0, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Just A Matcha Girlie Sparkle", sku: "STK-011", sold: 14, starting: 19, left: 5, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Instant Survival Sticker Glitter", sku: "STK-012", sold: 6, starting: 13, left: 7, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Daifuku Mochi Sticker Glitter", sku: "STK-013", sold: 27, starting: 44, left: 17, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Running on Caffeine Sparkle", sku: "STK-014", sold: 7, starting: 22, left: 15, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Fruit Sando Sticker Glitter", sku: "STK-015", sold: 11, starting: 20, left: 9, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Front Waffle Bunni Sparkle", sku: "STK-016", sold: 5, starting: 30, left: 25, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Back Waffle Bunni Sparkle", sku: "STK-017", sold: 1, starting: 23, left: 22, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Left Waffle Bunni Sparkle", sku: "STK-018", sold: 3, starting: 30, left: 27, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Right Waffle Bunni Sparkle", sku: "STK-019", sold: 1, starting: 23, left: 22, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Manager Bunni Sticker Glitter", sku: "STK-020", sold: 8, starting: 23, left: 15, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Milki Candy Sticker Sparkle", sku: "STK-021", sold: 12, starting: 32, left: 20, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Cherry Cream Sticker Glitter", sku: "STK-022", sold: 11, starting: 17, left: 6, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Hello Kitty Sticker", sku: "STK-023", sold: 3, starting: 11, left: 8, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Ditto Sticker Glitter", sku: "STK-024", sold: 27, starting: 27, left: 0, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Charmander Sticker Glitter", sku: "STK-025", sold: 16, starting: 20, left: 4, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Squirtle Sticker Glitter", sku: "STK-026", sold: 22, starting: 31, left: 9, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Bulbasaur Sticker Glitter", sku: "STK-027", sold: 11, starting: 23, left: 12, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Mosslax Sticker", sku: "STK-028", sold: 12, starting: 12, left: 0, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Pikachu Sticker", sku: "STK-029", sold: 25, starting: 30, left: 5, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Dragonite Sticker", sku: "STK-030", sold: 13, starting: 14, left: 1, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Snorlax Sticker", sku: "STK-031", sold: 14, starting: 18, left: 4, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Magikarp Sticker", sku: "STK-032", sold: 4, starting: 14, left: 10, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Psyduck Sticker", sku: "STK-033", sold: 7, starting: 15, left: 8, price: 2.50, cost: 0.30 },
  { category: "Stickers", name: "Gengar Sticker", sku: "STK-034", sold: 8, starting: 15, left: 7, price: 2.50, cost: 0.30 },
  // Sticker Sheets
  { category: "Sticker Sheets", name: "Pokopia Sticker Sheet S001", sku: "SS-001", sold: 129, starting: 132, left: 3, price: 6.00, cost: 0.80 },
  { category: "Sticker Sheets", name: "Doodly 151 Sticker Sheet S002", sku: "SS-002", sold: 38, starting: 52, left: 14, price: 6.00, cost: 0.80 },
  { category: "Sticker Sheets", name: "Snacks Sticker Sheet #001", sku: "SS-003", sold: 18, starting: 24, left: 6, price: 6.00, cost: 0.80 },
  { category: "Sticker Sheets", name: "Onigiri Sticker Sheet #002", sku: "SS-004", sold: 3, starting: 21, left: 18, price: 6.00, cost: 0.80 },
  { category: "Sticker Sheets", name: "Milki Mart Sticker Sheet #003", sku: "SS-005", sold: 15, starting: 30, left: 15, price: 6.00, cost: 0.80 },
  { category: "Sticker Sheets", name: "TouManz Sticker Sheet", sku: "SS-006", sold: 12, starting: 12, left: 0, price: 6.00, cost: 0.80 },
  // Letter Sets
  { category: "Letter Sets", name: "Onigiri Plain", sku: "LS-001", sold: 1, starting: 10, left: 9, price: 8.00, cost: 1.00 },
  { category: "Letter Sets", name: "Onigiri Ikura", sku: "LS-002", sold: 2, starting: 8, left: 6, price: 8.00, cost: 1.00 },
  { category: "Letter Sets", name: "Onigiri Tempura", sku: "LS-003", sold: 3, starting: 8, left: 5, price: 8.00, cost: 1.00 },
  { category: "Letter Sets", name: "Onigiri Tuna Mayo", sku: "LS-004", sold: 0, starting: 11, left: 11, price: 8.00, cost: 1.00 },
  { category: "Letter Sets", name: "Onigiri Pollock Roe", sku: "LS-005", sold: 0, starting: 11, left: 11, price: 8.00, cost: 1.00 },
  { category: "Letter Sets", name: "Onigiri Salmon", sku: "LS-006", sold: 1, starting: 9, left: 8, price: 8.00, cost: 1.00 },
  // Postcards/Prints
  { category: "Postcards/Prints", name: "Her Favourite Rubber Duckie Print", sku: "PC-001", sold: 9, starting: 9, left: 0, price: 3.00, cost: 0.50 },
  { category: "Postcards/Prints", name: "Paint Duckie Postcard", sku: "PC-002", sold: 4, starting: 4, left: 0, price: 5.00, cost: 0.50 },
  { category: "Postcards/Prints", name: "Lily of the Valley Postcard", sku: "PC-003", sold: 4, starting: 4, left: 0, price: 5.00, cost: 0.50 },
  { category: "Postcards/Prints", name: "Pepe, a Friend Postcard", sku: "PC-004", sold: 7, starting: 9, left: 2, price: 5.00, cost: 0.50 },
  { category: "Postcards/Prints", name: "Sweet Treat Postcard", sku: "PC-005", sold: 1, starting: 17, left: 16, price: 5.00, cost: 0.50 },
  { category: "Postcards/Prints", name: "Yellow Doodle Bunni Postcard", sku: "PC-006", sold: 5, starting: 17, left: 12, price: 5.00, cost: 0.50 },
  { category: "Postcards/Prints", name: "Blue Doodle Bunni Postcard", sku: "PC-007", sold: 2, starting: 16, left: 14, price: 5.00, cost: 0.50 },
  { category: "Postcards/Prints", name: "Ditto and Friends Postcard", sku: "PC-008", sold: 22, starting: 24, left: 2, price: 5.00, cost: 0.50 },
  { category: "Postcards/Prints", name: "Chocobi Postcard", sku: "PC-009", sold: 9, starting: 23, left: 14, price: 5.00, cost: 0.50 },
  { category: "Postcards/Prints", name: "Chocolate Hello Bunni Postcard", sku: "PC-010", sold: 12, starting: 25, left: 13, price: 5.00, cost: 0.50 },
  { category: "Postcards/Prints", name: "Strawberry Hello Bunni Postcard", sku: "PC-011", sold: 10, starting: 16, left: 6, price: 5.00, cost: 0.50 },
  { category: "Postcards/Prints", name: "Milk Hello Bunni Postcard", sku: "PC-012", sold: 12, starting: 16, left: 4, price: 5.00, cost: 0.50 },
  { category: "Postcards/Prints", name: "Double Chocolate Hello Bunni Postcard", sku: "PC-013", sold: 0, starting: 16, left: 16, price: 5.00, cost: 0.50 },
  { category: "Postcards/Prints", name: "Strawberry Caramel Corn Postcard", sku: "PC-014", sold: 18, starting: 20, left: 2, price: 5.00, cost: 0.50 },
  // Keycaps
  { category: "Keycaps", name: "Nessie Keycap", sku: "KC-001", sold: 1, starting: 2, left: 1, price: 50.00, cost: 18.00 },
  { category: "Keycaps", name: "Nessie Belly Keycap", sku: "KC-002", sold: 1, starting: 1, left: 0, price: 50.00, cost: 18.00 },
  { category: "Keycaps", name: "Cup O Nessie Keycap", sku: "KC-003", sold: 0, starting: 1, left: 1, price: 50.00, cost: 18.00 },
  { category: "Keycaps", name: "Pink Gloomy Bear Keycap", sku: "KC-004", sold: 0, starting: 2, left: 2, price: 45.00, cost: 18.00 },
  { category: "Keycaps", name: "Pink on Pink Gloomy Bear Keycap", sku: "KC-005", sold: 0, starting: 1, left: 1, price: 40.00, cost: 8.00 },
  { category: "Keycaps", name: "Pink on White Gloomy Bear Keycap", sku: "KC-006", sold: 0, starting: 1, left: 1, price: 40.00, cost: 8.00 },
  { category: "Keycaps", name: "Purple Gloomy Bear Keycap", sku: "KC-007", sold: 2, starting: 2, left: 0, price: 45.00, cost: 18.00 },
  { category: "Keycaps", name: "Tie Dye Gloomy Bear Keycap", sku: "KC-008", sold: 0, starting: 1, left: 1, price: 50.00, cost: 18.00 },
  { category: "Keycaps", name: "Tie Dye on White Gloomy Bear Keycap", sku: "KC-009", sold: 0, starting: 1, left: 1, price: 40.00, cost: 8.00 },
  { category: "Keycaps", name: "Samoyed Keycap and Pin Set", sku: "KC-010", sold: 0, starting: 1, left: 1, price: 60.00, cost: 24.00 },
  // Earrings
  { category: "Earrings", name: "Popcorn Salted Dangles", sku: "ER-001", sold: 1, starting: 1, left: 0, price: 20.00, cost: 0 },
  { category: "Earrings", name: "Seashells Studs", sku: "ER-002", sold: 0, starting: 1, left: 1, price: 25.00, cost: 0 },
  { category: "Earrings", name: "Floral Sequins Moon Studs", sku: "ER-003", sold: 0, starting: 2, left: 2, price: 35.00, cost: 0 },
  { category: "Earrings", name: "Floral Sequins Circle Studs", sku: "ER-004", sold: 0, starting: 1, left: 1, price: 35.00, cost: 0 },
  { category: "Earrings", name: "Baby Stud Pack", sku: "ER-005", sold: 0, starting: 2, left: 2, price: 10.00, cost: 0 },
  { category: "Earrings", name: "Soot Sprites Dangles", sku: "ER-006", sold: 1, starting: 1, left: 0, price: 20.00, cost: 0 },
  { category: "Earrings", name: "Soot Sprites 1", sku: "ER-007", sold: 1, starting: 1, left: 0, price: 15.00, cost: 0 },
  { category: "Earrings", name: "Soot Sprites 2", sku: "ER-008", sold: 0, starting: 1, left: 1, price: 15.00, cost: 0 },
  // Keychains
  { category: "Keychains", name: "Gachapon Keychain", sku: "KCH-001", sold: 63, starting: 150, left: 87, price: 5.00, cost: 0.35 },
  { category: "Keychains", name: "Popcorn Salted Keychain", sku: "KCH-002", sold: 1, starting: 1, left: 0, price: 15.00, cost: 0.30 },
  { category: "Keychains", name: "Small Popmart Keychain", sku: "KCH-003", sold: 1, starting: 10, left: 9, price: 22.00, cost: 10.00 },
  { category: "Keychains", name: "Big Popmart Keychain", sku: "KCH-004", sold: 3, starting: 5, left: 2, price: 29.00, cost: 17.00 },
  // Coasters
  { category: "Coasters", name: "Fruit Sando Coaster", sku: "CO-001", sold: 6, starting: 28, left: 22, price: 12.00, cost: 2.00 },
  { category: "Coasters", name: "Cream Waffle Coaster", sku: "CO-002", sold: 8, starting: 27, left: 19, price: 12.00, cost: 2.00 },
  { category: "Coasters", name: "Lunch Bento Coaster", sku: "CO-003", sold: 6, starting: 27, left: 21, price: 12.00, cost: 2.00 },
  // Photocard Holders
  { category: "Photocard Holders", name: "Praz Tomato", sku: "PH-001", sold: 0, starting: 1, left: 1, price: 40.00, cost: 5.00 },
  { category: "Photocard Holders", name: "Green Tea", sku: "PH-002", sold: 1, starting: 1, left: 0, price: 40.00, cost: 5.00 },
  { category: "Photocard Holders", name: "Rits Original", sku: "PH-003", sold: 0, starting: 1, left: 1, price: 30.00, cost: 4.00 },
  { category: "Photocard Holders", name: "Prinkles", sku: "PH-004", sold: 1, starting: 1, left: 0, price: 30.00, cost: 4.00 },
  { category: "Photocard Holders", name: "Choco Banana Toast", sku: "PH-005", sold: 0, starting: 1, left: 1, price: 25.00, cost: 4.00 },
  { category: "Photocard Holders", name: "Avocado Toast", sku: "PH-006", sold: 1, starting: 1, left: 0, price: 25.00, cost: 4.00 },
];

const CATEGORIES = ["All", ...Array.from(new Set(RAW_DATA.map(p => p.category)))];

// Suggest restock qty = 2× the sold amount (rounded up to nearest 5), min 5
function suggestQty(sold) {
  if (sold === 0) return 5;
  return Math.ceil((sold * 2) / 5) * 5;
}

function sellThroughRate(sold, starting) {
  if (!starting || starting === 0) return 0;
  return Math.round((sold / starting) * 100);
}

// Status based on stock left vs sold (if sold a lot and barely left → restock)
function getStatus(left, sold) {
  if (left === 0) return "out";
  // If stock left is less than what was sold, consider it low
  if (left < sold * 0.3) return "critical";
  if (left < sold * 0.6) return "low";
  return "ok";
}

const statusConfig = {
  out: { label: "Out of Stock", color: "#FF5F7E", bg: "rgba(255,95,126,0.1)", dot: "#FF5F7E" },
  critical: { label: "Critical", color: "#FF9A3C", bg: "rgba(255,154,60,0.1)", dot: "#FF9A3C" },
  low: { label: "Low Stock", color: "#FFD166", bg: "rgba(255,209,102,0.1)", dot: "#FFD166" },
  ok: { label: "Good", color: "#06D6A0", bg: "rgba(6,214,160,0.1)", dot: "#06D6A0" },
};

const CATEGORY_ICONS = {
  "Stickers": "🌟", "Sticker Sheets": "📄", "Letter Sets": "✉️",
  "Postcards/Prints": "🖼", "Keycaps": "⌨️", "Earrings": "💎",
  "Keychains": "🔑", "Coasters": "☕", "Photocard Holders": "📸",
};

 function MilkibunniRestock() {
  const [products, setProducts] = useState(RAW_DATA.map((p, i) => ({ ...p, id: i })));
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("inventory"); // inventory | restock | insights
  const [editId, setEditId] = useState(null);
  const [editLeft, setEditLeft] = useState("");
  const [toast, setToast] = useState(null);
  const [sortBy, setSortBy] = useState("status");

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(null), 2500); };

  const filtered = products
    .filter(p => filter === "All" || p.category === filter)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      const order = { out: 0, critical: 1, low: 2, ok: 3 };
      if (sortBy === "status") return order[getStatus(a.left, a.sold)] - order[getStatus(b.left, b.sold)];
      if (sortBy === "sold") return b.sold - a.sold;
      if (sortBy === "str") return sellThroughRate(b.sold, b.starting) - sellThroughRate(a.sold, a.starting);
      return a.name.localeCompare(b.name);
    });

  const needsRestock = products.filter(p => getStatus(p.left, p.sold) !== "ok");
  const outOfStock = products.filter(p => p.left === 0);
  const totalRevenue = products.reduce((s, p) => s + p.sold * p.price, 0);
  const totalProfit = products.reduce((s, p) => s + p.sold * (p.price - p.cost), 0);
  const topSellers = [...products].sort((a, b) => b.sold - a.sold).slice(0, 5);

  // Category breakdown
  const catStats = CATEGORIES.filter(c => c !== "All").map(cat => {
    const items = products.filter(p => p.category === cat);
    const sold = items.reduce((s, p) => s + p.sold, 0);
    const rev = items.reduce((s, p) => s + p.sold * p.price, 0);
    return { cat, sold, rev, count: items.length };
  }).sort((a, b) => b.rev - a.rev);

  const saveEdit = (id) => {
    const val = parseInt(editLeft);
    if (isNaN(val) || val < 0) return;
    setProducts(prev => prev.map(p => p.id === id ? { ...p, left: val } : p));
    setEditId(null);
    showToast("Stock updated ✓");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#FFF8F5", fontFamily: "'DM Sans', 'Segoe UI', sans-serif", color: "#2D2D2D" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-thumb { background: #FFCDD5; border-radius: 4px; }
        .pill { border-radius: 999px; padding: 5px 14px; font-size: 12px; font-weight: 500; cursor: pointer; border: 1.5px solid #F2C4CE; background: #FFF; color: #B56576; transition: all 0.15s; font-family: inherit; }
        .pill:hover,.pill.active { background: #FF8FA3; border-color: #FF8FA3; color: #fff; }
        .card { background: #fff; border-radius: 16px; border: 1px solid #FFE4EA; }
        .tab-btn { background: transparent; border: none; padding: 10px 20px; font-family: inherit; font-size: 13px; font-weight: 500; color: #B0748A; cursor: pointer; border-bottom: 2px solid transparent; transition: all 0.15s; }
        .tab-btn.active { color: #E05C7A; border-bottom-color: #E05C7A; }
        .row:hover { background: #FFF5F7; }
        .edit-input { background: #FFF0F3; border: 1.5px solid #FF8FA3; border-radius: 8px; color: #E05C7A; padding: 5px 10px; font-family: inherit; font-size: 13px; width: 80px; outline: none; }
        .action-btn { background: transparent; border: 1.5px solid #F2C4CE; border-radius: 8px; padding: 5px 12px; font-size: 11px; font-family: inherit; color: #C07080; cursor: pointer; transition: all 0.15s; }
        .action-btn:hover { background: #FFE4EA; }
        .save-btn { background: #FF8FA3; border: none; border-radius: 8px; padding: 6px 14px; font-size: 12px; font-family: inherit; color: #fff; cursor: pointer; font-weight: 500; }
        .toast { position: fixed; bottom: 24px; right: 24px; background: #fff; border: 1px solid #F2C4CE; border-radius: 12px; padding: 12px 20px; font-size: 13px; color: #C07080; z-index: 100; box-shadow: 0 4px 20px rgba(224,92,122,0.12); animation: fadeUp 0.2s ease; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        .progress { height: 5px; background: #FFE4EA; border-radius: 3px; overflow: hidden; margin-top: 5px; }
        .progress-fill { height: 100%; border-radius: 3px; }
        .stat { background: #fff; border-radius: 16px; border: 1px solid #FFE4EA; padding: 20px; }
      `}</style>

      {/* HEADER */}
      <div style={{ background: "#fff", borderBottom: "1px solid #FFE4EA", padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 40, height: 40, background: "linear-gradient(135deg, #FFB3C1, #FF8FA3)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🐰</div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 800, color: "#2D2D2D", lineHeight: 1 }}>Studio Milkibunni</div>
            <div style={{ fontSize: 11, color: "#C07080", marginTop: 1 }}>Artbox FOMO 10–12 April · Restock Tracker</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {needsRestock.length > 0 && (
            <span style={{ background: "#FFF0F3", border: "1.5px solid #FFB3C1", borderRadius: 999, padding: "5px 14px", fontSize: 12, color: "#E05C7A", fontWeight: 600 }}>
              ⚠ {needsRestock.length} items need restock
            </span>
          )}
        </div>
      </div>

      <div style={{ padding: "24px 32px", maxWidth: 1200, margin: "0 auto" }}>

        {/* STAT CARDS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 24 }}>
          {[
            { label: "Total Revenue", value: `$${totalRevenue.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, icon: "💸", color: "#06D6A0" },
            { label: "Total Profit", value: `$${totalProfit.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, icon: "📈", color: "#4CC9F0" },
            { label: "Out of Stock", value: outOfStock.length, icon: "🚫", color: "#FF5F7E" },
            { label: "Need Restock", value: needsRestock.length, icon: "🔁", color: "#FF9A3C" },
          ].map(s => (
            <div className="stat" key={s.label}>
              <div style={{ fontSize: 24, marginBottom: 6 }}>{s.icon}</div>
              <div style={{ fontSize: 26, fontFamily: "'Playfair Display', serif", fontWeight: 700, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: 11, color: "#C07080", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* TABS */}
        <div style={{ borderBottom: "1px solid #FFE4EA", marginBottom: 20, display: "flex", gap: 0 }}>
          {[["inventory", "📦 Inventory"], ["restock", "🔁 Restock List"], ["insights", "✨ Insights"]].map(([id, label]) => (
            <button key={id} className={`tab-btn ${tab === id ? "active" : ""}`} onClick={() => setTab(id)}>{label}</button>
          ))}
        </div>

        {/* INVENTORY TAB */}
        {tab === "inventory" && (
          <>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16, alignItems: "center" }}>
              <input
                placeholder="Search name or SKU…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ background: "#fff", border: "1.5px solid #FFE4EA", borderRadius: 999, padding: "7px 16px", fontFamily: "inherit", fontSize: 13, outline: "none", width: 220, color: "#2D2D2D" }}
              />
              {CATEGORIES.map(c => (
                <button key={c} className={`pill ${filter === c ? "active" : ""}`} onClick={() => setFilter(c)}>
                  {CATEGORY_ICONS[c] || ""} {c}
                </button>
              ))}
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                style={{ marginLeft: "auto", background: "#fff", border: "1.5px solid #FFE4EA", borderRadius: 999, padding: "7px 14px", fontFamily: "inherit", fontSize: 12, color: "#C07080", outline: "none", cursor: "pointer" }}
              >
                <option value="status">Sort: Status</option>
                <option value="sold">Sort: Units Sold</option>
                <option value="str">Sort: Sell-Through %</option>
                <option value="name">Sort: Name</option>
              </select>
            </div>

            <div className="card" style={{ overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ background: "#FFF5F7", borderBottom: "1px solid #FFE4EA" }}>
                    {["Product", "SKU", "Category", "Sold", "Starting", "Stock Left", "Sell-Through", "Status", ""].map(h => (
                      <th key={h} style={{ padding: "11px 16px", textAlign: "left", color: "#C07080", fontSize: 10, fontWeight: 600, letterSpacing: "0.5px" }}>{h.toUpperCase()}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(p => {
                    const st = getStatus(p.left, p.sold);
                    const cfg = statusConfig[st];
                    const str = sellThroughRate(p.sold, p.starting);
                    return (
                      <tr key={p.id} className="row" style={{ borderBottom: "1px solid #FFF0F3", transition: "background 0.1s" }}>
                        <td style={{ padding: "12px 16px", fontWeight: 500, color: "#2D2D2D" }}>{p.name}</td>
                        <td style={{ padding: "12px 16px", color: "#C07080", fontSize: 11 }}>{p.sku}</td>
                        <td style={{ padding: "12px 16px", color: "#B0748A", fontSize: 12 }}>{CATEGORY_ICONS[p.category]} {p.category}</td>
                        <td style={{ padding: "12px 16px", fontWeight: 600, color: "#2D2D2D" }}>{p.sold}</td>
                        <td style={{ padding: "12px 16px", color: "#B0748A" }}>{p.starting}</td>
                        <td style={{ padding: "12px 16px", minWidth: 120 }}>
                          {editId === p.id ? (
                            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                              <input className="edit-input" value={editLeft} onChange={e => setEditLeft(e.target.value)} onKeyDown={e => e.key === "Enter" && saveEdit(p.id)} autoFocus />
                              <button className="save-btn" onClick={() => saveEdit(p.id)}>✓</button>
                              <button className="action-btn" onClick={() => setEditId(null)}>✕</button>
                            </div>
                          ) : (
                            <div>
                              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                                <span style={{ color: cfg.color, fontWeight: 600 }}>{p.left}</span>
                              </div>
                              <div className="progress">
                                <div className="progress-fill" style={{ width: `${Math.min((p.left / Math.max(p.starting, 1)) * 100, 100)}%`, background: cfg.dot }} />
                              </div>
                            </div>
                          )}
                        </td>
                        <td style={{ padding: "12px 16px" }}>
                          <div style={{ fontSize: 12, fontWeight: 600, color: str >= 80 ? "#E05C7A" : "#B0748A" }}>{str}%</div>
                          <div className="progress" style={{ width: 60 }}>
                            <div className="progress-fill" style={{ width: `${str}%`, background: str >= 80 ? "#FF8FA3" : "#F2C4CE" }} />
                          </div>
                        </td>
                        <td style={{ padding: "12px 16px" }}>
                          <span style={{ background: cfg.bg, color: cfg.color, padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 500 }}>{cfg.label}</span>
                        </td>
                        <td style={{ padding: "12px 16px" }}>
                          <button className="action-btn" onClick={() => { setEditId(p.id); setEditLeft(String(p.left)); }}>Edit</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {filtered.length === 0 && <div style={{ padding: 48, textAlign: "center", color: "#C07080" }}>No products found 🐰</div>}
            </div>
          </>
        )}

        {/* RESTOCK LIST TAB */}
        {tab === "restock" && (
          <div>
            <div style={{ marginBottom: 16, fontSize: 13, color: "#C07080" }}>
              {needsRestock.length} items below healthy stock levels. Suggested restock quantities are based on 2× units sold.
            </div>
            <div className="card" style={{ overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ background: "#FFF5F7", borderBottom: "1px solid #FFE4EA" }}>
                    {["Product", "Category", "Sold", "Left", "Status", "Suggested Order", "Est. Cost"].map(h => (
                      <th key={h} style={{ padding: "11px 16px", textAlign: "left", color: "#C07080", fontSize: 10, fontWeight: 600, letterSpacing: "0.5px" }}>{h.toUpperCase()}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {needsRestock
                    .sort((a, b) => { const o = { out: 0, critical: 1, low: 2 }; return o[getStatus(a.left, a.sold)] - o[getStatus(b.left, b.sold)]; })
                    .map(p => {
                      const st = getStatus(p.left, p.sold);
                      const cfg = statusConfig[st];
                      const qty = suggestQty(p.sold);
                      const estCost = (qty * p.cost).toFixed(2);
                      return (
                        <tr key={p.id} className="row" style={{ borderBottom: "1px solid #FFF0F3" }}>
                          <td style={{ padding: "12px 16px", fontWeight: 500 }}>{p.name}</td>
                          <td style={{ padding: "12px 16px", color: "#B0748A", fontSize: 12 }}>{CATEGORY_ICONS[p.category]} {p.category}</td>
                          <td style={{ padding: "12px 16px", fontWeight: 600 }}>{p.sold}</td>
                          <td style={{ padding: "12px 16px", color: cfg.color, fontWeight: 600 }}>{p.left}</td>
                          <td style={{ padding: "12px 16px" }}>
                            <span style={{ background: cfg.bg, color: cfg.color, padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 500 }}>{cfg.label}</span>
                          </td>
                          <td style={{ padding: "12px 16px" }}>
                            <span style={{ background: "#FFF0F3", color: "#E05C7A", padding: "4px 12px", borderRadius: 8, fontSize: 13, fontWeight: 700 }}>
                              +{qty} units
                            </span>
                          </td>
                          <td style={{ padding: "12px 16px", color: "#B0748A", fontWeight: 500 }}>
                            {p.cost > 0 ? `$${estCost}` : "—"}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: 16, padding: "14px 20px", background: "#FFF0F3", borderRadius: 12, fontSize: 13, color: "#C07080", display: "flex", justifyContent: "space-between" }}>
              <span>📦 Total items to restock: <strong style={{ color: "#E05C7A" }}>{needsRestock.length}</strong></span>
              <span>💰 Est. total restock cost: <strong style={{ color: "#E05C7A" }}>
                ${needsRestock.reduce((s, p) => s + suggestQty(p.sold) * p.cost, 0).toFixed(2)}
              </strong></span>
            </div>
          </div>
        )}

        {/* INSIGHTS TAB */}
        {tab === "insights" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {/* Top Sellers */}
            <div className="card" style={{ padding: 24 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, marginBottom: 18, color: "#2D2D2D" }}>🏆 Top 5 Sellers</div>
              {topSellers.map((p, i) => (
                <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: i === 0 ? "#FFD700" : i === 1 ? "#C0C0C0" : "#CD7F32", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff", flexShrink: 0 }}>
                    {i + 1}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "#2D2D2D", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</div>
                    <div style={{ fontSize: 11, color: "#C07080" }}>{p.category} · {p.sold} sold · ${(p.sold * p.price).toFixed(0)} rev</div>
                    <div className="progress" style={{ marginTop: 4 }}>
                      <div className="progress-fill" style={{ width: `${(p.sold / topSellers[0].sold) * 100}%`, background: "#FF8FA3" }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Category Breakdown */}
            <div className="card" style={{ padding: 24 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, marginBottom: 18, color: "#2D2D2D" }}>📊 Revenue by Category</div>
              {catStats.map(s => (
                <div key={s.cat} style={{ marginBottom: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 }}>
                    <span style={{ fontWeight: 500 }}>{CATEGORY_ICONS[s.cat]} {s.cat}</span>
                    <span style={{ color: "#E05C7A", fontWeight: 600 }}>${s.rev.toFixed(0)}</span>
                  </div>
                  <div className="progress">
                    <div className="progress-fill" style={{ width: `${(s.rev / catStats[0].rev) * 100}%`, background: "linear-gradient(90deg, #FFB3C1, #FF8FA3)" }} />
                  </div>
                  <div style={{ fontSize: 10, color: "#C07080", marginTop: 2 }}>{s.sold} units sold across {s.count} products</div>
                </div>
              ))}
            </div>

            {/* Sold-Out Heroes */}
            <div className="card" style={{ padding: 24 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, marginBottom: 6, color: "#2D2D2D" }}>🔥 Completely Sold Out</div>
              <div style={{ fontSize: 12, color: "#C07080", marginBottom: 16 }}>These items hit zero — strong demand signals for next event.</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {outOfStock.filter(p => p.sold > 0).map(p => (
                  <span key={p.id} style={{ background: "#FFF0F3", border: "1px solid #FFB3C1", borderRadius: 8, padding: "5px 11px", fontSize: 12, color: "#E05C7A", fontWeight: 500 }}>
                    {p.name} ({p.sold} sold)
                  </span>
                ))}
              </div>
            </div>

            {/* Slow Movers */}
            <div className="card" style={{ padding: 24 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, marginBottom: 6, color: "#2D2D2D" }}>🐌 Slow Movers</div>
              <div style={{ fontSize: 12, color: "#C07080", marginBottom: 16 }}>Sold under 20% of starting stock — consider smaller batches next time.</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {products
                  .filter(p => p.starting > 0 && sellThroughRate(p.sold, p.starting) < 20 && p.sold > 0)
                  .sort((a, b) => sellThroughRate(a.sold, a.starting) - sellThroughRate(b.sold, b.starting))
                  .slice(0, 6)
                  .map(p => (
                    <div key={p.id} style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                      <span style={{ color: "#2D2D2D" }}>{p.name}</span>
                      <span style={{ color: "#C07080", fontWeight: 600 }}>{sellThroughRate(p.sold, p.starting)}% sold</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default function App() {
  return <MilkibunniRestock />;
}