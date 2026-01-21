// data.js
export const categories = [
  { slug: "cellphones", label: "Cellphones", icon: "📱" },
  { slug: "computers", label: "Computers", icon: "🖥️" },
  { slug: "furniture_office_items", label: "Furniture & Office Items", icon: "🪑" },
  { slug: "home_appliances", label: "Home Appliances", icon: "🧺" },
  { slug: "televisions", label: "Televisions", icon: "📺" },
  { slug: "video_games", label: "Video Games", icon: "🎮" },
];

    export const products = [
    // Computers
    { id: 1,  name: "IBM PC (1981)",              category: "computers", price: 1200, stock: 1,  description: "An early personal computer that shaped the PC era.", image: "ibm.png" },
    { id: 2,  name: "Commodore 64",              category: "computers", price: 450,  stock: 3,  description: "A classic 1980s home computer loved for games.",     image: "commodore.png" },
    { id: 3,  name: "Apple II",                  category: "computers", price: 1800, stock: 1,  description: "A famous early Apple computer used at home and school.", image: "apple2.png" },
    { id: 4,  name: "Macintosh Classic",         category: "computers", price: 700,  stock: 2,  description: "Compact vintage Mac with an all-in-one CRT display.", image: "macintosh.png" },
    { id: 5,  name: "MS-DOS Computer",           category: "computers", price: 380,  stock: 4,  description: "A retro PC running classic DOS software.",            image: "ms-dos.png" },
    { id: 6,  name: "Floppy Disk Drive",         category: "computers", price: 45,   stock: 10, description: "Old storage drive for floppy disks.",                 image: "floppy.png" },
    { id: 7,  name: "CRT Monitor",               category: "computers", price: 120,  stock: 6,  description: "Bulky retro display with that classic glow.",         image: "crt.png" },
    { id: 8,  name: "Mechanical Keyboard",       category: "computers", price: 95,   stock: 8,  description: "Vintage mechanical keyboard with a satisfying click.", image: "ibm_keyboard.png" },
    { id: 9,  name: "Dot Matrix Printer",        category: "computers", price: 260,  stock: 2,  description: "Classic impact printer used for continuous paper forms.", image: "dot-printer.png" },

  // Cellphones
  { id: 10, name: "Nokia 3310",                category: "cellphones", price: 90,  stock: 7,  description: "Legendary durable phone with simple texting and Snake.", image: "nokia.png" },
  { id: 11, name: "Motorola StarTAC",          category: "cellphones", price: 220, stock: 2,  description: "Iconic flip phone from the early mobile era.",           image: "motorola.png" },
  { id: 12, name: "BlackBerry Classic",        category: "cellphones", price: 180, stock: 3,  description: "Physical keyboard phone built for messaging.",           image: "blackberry.png" },
  { id: 13, name: "Pager (Beeper)",            category: "cellphones", price: 75,  stock: 5,  description: "A retro pager for short numeric/text alerts.",          image: "pager.png" },
  { id: 14, name: "Corded Telephone",          category: "cellphones", price: 60,  stock: 6,  description: "Old-school phone with a corded handset.",               image: "corded-phone.png" },
  { id: 15, name: "Rotary Dial Telephone",     category: "cellphones", price: 150, stock: 2,  description: "Classic dial phone with rotary number input.",          image: "rotary-dial.png" },
  { id: 16, name: "Fax Machine",               category: "cellphones", price: 300, stock: 1,  description: "Vintage fax machine for sending printed documents.",     image: "fax.png" },

  // Furniture & Office
  { id: 39, name: "Wooden Office Desk",        category: "furniture_office_items", price: 550, stock: 2, description: "Sturdy wooden desk for a retro office setup.", image: "wooden_desk.png" },
  { id: 40, name: "Typewriter",                category: "furniture_office_items", price: 380, stock: 4, description: "Mechanical typewriter for real tactile writing.", image: "typewritter.png" },
  { id: 41, name: "Filing Cabinet",            category: "furniture_office_items", price: 260, stock: 3, description: "Classic metal cabinet for documents and folders.", image: "filling_cabinet.png" },
  { id: 42, name: "Office Chair (vintage)",    category: "furniture_office_items", price: 210, stock: 4, description: "Vintage chair with classic office style.",        image: "vintage-chair.png" },
  { id: 43, name: "Desk Lamp (classic design)",category: "furniture_office_items", price: 95,  stock: 6, description: "Retro desk lamp with warm, classic look.",       image: "desk_lamp.png" },

  // Home Appliances
  { id: 34, name: "Old Refrigerator",          category: "home_appliances", price: 600, stock: 1, description: "Vintage fridge with classic design.",                 image: "old_refrigerator.png" },
  { id: 35, name: "Washing Machine (manual)",  category: "home_appliances", price: 450, stock: 1, description: "Manual-style washing machine from earlier decades.", image: "manual_washer.png" },
  { id: 36, name: "Microwave Oven (1st gen)",  category: "home_appliances", price: 280, stock: 2, description: "Early microwave model—retro kitchen tech.",          image: "microwave.png" },
  { id: 37, name: "Electric Fan (metal)",      category: "home_appliances", price: 140, stock: 5, description: "Metal fan with vintage industrial look.",            image: "eletric-fan.png" },
  { id: 38, name: "Vacuum Cleaner (vintage)",  category: "home_appliances", price: 320, stock: 2, description: "Classic vacuum cleaner with old-school build.",      image: "vaccum-cleaner.png" },

  // Televisions
  { id: 17, name: "Black-and-White Television",category: "televisions", price: 400, stock: 1, description: "Early TV set with black-and-white image.",               image: "black_and_white_tv.png" },
  { id: 18, name: "CRT Color Television",      category: "televisions", price: 250, stock: 3, description: "Retro color CRT TV with classic curved screen.",         image: "crt-tv.png" },
  { id: 19, name: "VHS Player",                category: "televisions", price: 130, stock: 5, description: "Plays VHS tapes—perfect for retro movie nights.",        image: "vhs-player.png" },
  { id: 20, name: "Betamax Player",            category: "televisions", price: 350, stock: 1, description: "Vintage tape format player and collector’s item.",        image: "betamax.png" },
  { id: 21, name: "DVD Player (1st gen)",      category: "televisions", price: 180, stock: 2, description: "Early DVD player from the start of the DVD era.",        image: "dvd-player.png" },
  { id: 22, name: "Cassette Tape Player",      category: "televisions", price: 85,  stock: 6, description: "Plays audio cassettes—retro music on tape.",           image: "cassete-player.png" },
  { id: 23, name: "Walkman",                   category: "televisions", price: 110, stock: 8, description: "Portable cassette player—music on the go.",              image: "walkman.png" },
  { id: 24, name: "Boombox",                   category: "televisions", price: 200, stock: 3, description: "Large portable stereo for tapes/radio.",                 image: "boombox.png" },
  { id: 25, name: "Record Player (Turntable)", category: "televisions", price: 320, stock: 4, description: "Turntable for vinyl records with classic sound.",         image: "record-player.png" },
  { id: 26, name: "AM/FM Radio",               category: "televisions", price: 70,  stock: 7, description: "Retro radio for AM/FM stations.",                        image: "am_fm_radio.png" },

  // Video Games
  { id: 27, name: "Atari 2600",                category: "video_games", price: 280,  stock: 2, description: "Classic console from the early home gaming era.", image: "atari2006.png" },
  { id: 28, name: "Nintendo Entertainment System (NES)", category: "video_games", price: 350, stock: 3, description: "Iconic Nintendo console with legendary games.", image: "NES.png" },
  { id: 29, name: "Super Nintendo (SNES)",     category: "video_games", price: 420,  stock: 2, description: "16-bit console famous for timeless classics.",      image: "SNES.png" },
  { id: 30, name: "Sega Genesis",              category: "video_games", price: 300,  stock: 2, description: "Sega’s classic console from the 16-bit era.",       image: "genesis.png" },
  { id: 31, name: "Nintendo Game Boy",         category: "video_games", price: 250,  stock: 4, description: "Portable console that made handheld gaming huge.",   image: "game_boy.png" },
  { id: 32, name: "PlayStation 1",             category: "video_games", price: 220,  stock: 3, description: "Sony’s first PlayStation—3D gaming history.",       image: "play1.png" },
  { id: 33, name: "Arcade Machine",            category: "video_games", price: 2500, stock: 1, description: "Full-size arcade cabinet for the ultimate retro vibe.", image: "arcade_machine.png" },
];
