import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'poti.json');
const uploadsDir = path.join(process.cwd(), 'public', 'uploads', 'poti');

// Ensure directories exist
async function ensureDirectories() {
  const dirs = [
    path.join(process.cwd(), 'data'),
    uploadsDir
  ];
  
  for (const dir of dirs) {
    try {
      await fs.access(dir);
    } catch {
      await fs.mkdir(dir, { recursive: true });
    }
  }
}

// Existing paths data
const existingPoti = [
  { 
    id: 1, 
    naslov: 'Panoramska pot na Žusem', 
    potekPoti: 'Turistična kmetija Žurej (313 m) -> na Žusem (669 m)', 
    visinskaRazlika: '356 m', 
    dolzinaPoti: '3,7 km', 
    casHoje: '100 minut', 
    zahtevnostPoti: 'Lahka pot', 
    opisPoti: 'Pohod pričnemo pri Turistični kmetiji Žurej-Ječovo. Po lepi javorski dolini, kjer se je po ljudskem izročilu sadil prvi krompir v Sloveniji, prečkamo reko Voglajno, ter zavijemo levo v gozd. Markirana pot nas vodi mimo NAPAJALNIKA . Nadaljujemo po urejenem gozdu, kjer lahko z nekaj sreče naberemo veliko vrst gob. Prispemo do prvega težjega vzpona: »Kurčev hrib«.  Ta del poti je še posebej čudovit spomladi, v času Tradicionalnega pohoda. Sledi spust, pot pa nas pripelje do »Grofovega štanta«, kjer se lahko priključimo Strmi, zelo zahtevni poti, ali pa nadaljujemo desno po cesti mimo kmetije Užmah. Tam se nam odpre čudovit razgled na dolino pod nami, pogled pa seže tudi do Kamniško-savinjskih alp, Pohorja, Boča, Donačke. Naprej se odpravimo po kolovozu do majhne stare kozjanske hišice, kjer zavijemo levo na makadamsko cesto. Po desetih minutah makadama zavijemo levo v hrib in skozi manjši kostanjev gozd pridemo do znamenitih »Ravnih njiv«. Včasih je tu stala kmetija Lipovšek, ki pa so jo Nemci med vojno požgali. Ostali so še temelji in majnši kozolec, kjer se lahko odpočijemo. Nemškemu agresorju se je uprla tudi mogočna lipa, ki še danes stoji. Nadaljujemo po ravnem terenu, levo mimo Velikega Špička (669m) (ter prostora, kjer je že med vojno stal prvi stolp – podatek je treba še preveriti v naslednjih dneh – po ljudskih izročilih, pa naj bi tu stala tudi prva lovska preža na slovenskem, v lasti Žusemskih grofov). Sledimo markacijam in po 10 minutah hoje, pridemo do Stolpa ljubezni.',
    imgUrl: '/images/panoramska_pot.JPG',
    imgUrl2: '/images/panoramska/panoramska2.jpg',
    imgUrl3: '/images/panoramska/panoramska3.jpg',
    imgUrl4: '/images/panoramska/panoramska4.jpg'
  },
  { 
    id: 2, 
    naslov: 'Martinova pot na Sv. Heleno', 
    potekPoti: 'Turistična kmetija Žurej (313 m) -> na Sv. Heleno (528 m)', 
    visinskaRazlika: '215 m', 
    dolzinaPoti: '2,2 km', 
    casHoje: '45 minut', 
    zahtevnostPoti: 'Lahka pot', 
    opisPoti: 'Pot se prične pri Turistični kmetiji Ječovo, od koder nas vodi mimo Završkove domačije proti Vošam po vinsko turistični cesti (VTC), kjer se v nadaljevanju pot prične rahlo vzpenjati. Ko prispemo na vrh klanca do Kladnikove domačije, sledimo markacijam in pot nadaljujemo naprej skozi gozd. Ko se nam pogled odpre, pred nami zagledamo hrib Sv. Helene, katerega glavna značilnost so številni vinogradi in zidanice (gorce) na južne pobočju, na vrhu pa je cerkev Sv. Helene. Pot nadaljujejemo še naprej po VTC in uživamo v panorami na številne vinograde in zidanice v bližini. Na vrhu grebena se nam pogled odpre na vaško središče Javorja in hribe v bližnji in daljni okolici. Pot nas vodi naprej po grebenu mimo številnih zinanic do najvišje točke hriba Sv. Helene. To je tudi prireditveni prostor, kjer vsako leto na Martinovo nedeljo poteka prireditev z naslovom: »Po Sv. Heleni Martin na star način«. Na ta dan poteka tudi Martinov pohod po tej poti.',
    imgUrl: '/images/martinova_pot.jpg',
    imgUrl2: '/images/martinova_pot.jpg',
    imgUrl3: '/images/martinova_pot.jpg',
    imgUrl4: '/images/martinova_pot.jpg'
  },
  { 
    id: 3, 
    naslov: 'Strma pot na Žusem', 
    potekPoti: 'Grofov štant (430 m) -> na Žusem (669 m)', 
    visinskaRazlika: '239m', 
    dolzinaPoti: '1,6 km', 
    casHoje: '40 minut', 
    zahtevnostPoti: 'Zelo zahtevna pot', 
    opisPoti: 'Začetek strme poti je v predelu, ki se imenuje Grofov štant. Do tega predala lahko pridemo po panoramski poti, za kar potrebujemo 30 minut zmerne hoje. Strma pot je opremljena z jeklenicami, klini in številnimi stopnicami. Pot prečka številne skale, ki z svojo veličino poti dodajo prav poseben čar.',
    imgUrl: '/images/strma_pot.jpg',
    imgUrl2: '/images/strma/strma2.jpg',
    imgUrl3: '/images/strma/strma3.jpg',
    imgUrl4: '/images/strma/strma4.jpg'
  },
  { 
    id: 4, 
    naslov: 'Križnikova pot na Žusem', 
    potekPoti: 'Loka pri Žusmu (250 m) -> na Žusem (669 m)', 
    visinskaRazlika: '419 m', 
    dolzinaPoti: '2,2 km', 
    casHoje: '60 minut', 
    zahtevnostPoti: 'Lahka pot', 
    opisPoti: 'Pot se prične v Loki pri Žusmu, pri Loškem vodnjaku, od koder nas vodi po asfaltni cesti do domačije Ratajc, kjer  se podamo v gozd. Po lepi gozdni poti nadaljujemo pot prblibižno dvajset minut, nakar pridemo do domačije Užmah. Od tod je zelo lep razgled na Loko. Tu si lahko ogledamo tudi ribnik. Nadaljujemo po makadamski cesti in pridemo da izvira pitne vode, kjer se lahko odžejamo. Pot nadaljujemo po makadamu do Žusemskega gradu. Od tu gremo levo navzgor po asfaltni cesti približno deset minut, nato pa zavijemo desno v gozd. Sledimo markacijam, ki nas usmerjajo mimo skalovja proti vrhu Žusma.',
    imgUrl: '/images/kostanjeva_pot.JPG',
    imgUrl2: '/images/kriznikova/kriznikova2.jpg',
    imgUrl3: '/images/kriznikova/kriznikova3.jpg',
    imgUrl4: '/images/kriznikova/kriznikova1.jpg'
  },
  { 
    id: 5, 
    naslov: 'Grajska pot na Žusem', 
    potekPoti: 'Žamerk (300 m) -> na Žusem (669 m)', 
    visinskaRazlika: '369 m', 
    dolzinaPoti: '2,2 km', 
    casHoje: '60 minut', 
    zahtevnostPoti: 'Zahtevna pot', 
    opisPoti: 'Pot je del Kozjanske obhodnice; t. j. poti, ki pelje po obronkih Kozjanskega. Začetek poti je v kraju Žamerk. Pri znameniti pečini z »oknom« se usmerimo proti Žusmu, sledimo markacijam in prečkamo cesto Loka - Dobrina ter nadaljujemo pot po stranski cesti mimo domačij (imena domačij!!) in kapelice z zvonikom. Na prvem odcepu zavijemo levo ter zagrizemo v strm hrib skozi gozdiček do domačije (ime domačije!!). Tu zavijemo levo in po kolovozu nadaljujemo dvesto metrov, nato pa zopet zavijemo desno v gozd. Pot se strmo vzpenja proti vrhu Mali Špiček. Pri padalskem vzletišču zavijemo levo in nadaljujemo po asfaltirani cesti mimo dveh cerkva in planinskega doma. V sledečem križišču zavijemo desno, nato pa levo mimo lovskega doma nadaljujemo pot po makadamu. Čez približno petsto metrov zavijemo levo v gozd, sledimo markacijam. Po desetih minutah dosežemo vrh.',
    imgUrl: '/images/grajska_pot.jpg',
    imgUrl2: '/images/grajska/grajska2.jpg',
    imgUrl3: '/images/grajska/grajska1.jpg',
    imgUrl4: '/images/grajska_pot.jpg'
  },
  { 
    id: 6, 
    naslov: 'Gamsova pot na Žusem', 
    potekPoti: 'Žusemski grad (300 m) -> na Žusem (669 m)', 
    visinskaRazlika: '369 m', 
    dolzinaPoti: '2,2 km', 
    casHoje: '30 minut', 
    zahtevnostPoti: 'Zahtevna pot', 
    opisPoti: 'Pot poteka od gradu in se razdeli na dva dela: na lahko in zahtevno pot. Proti vrhu, velik del poti poteka prav ob robu kamnoloma, kjer vam zastane dih in se počutite kot gams.',
    imgUrl: '/images/strma/strma1.jpg',
    imgUrl2: '/images/strma/strma1.jpg',
    imgUrl3: '/images/strma/strma1.jpg',
    imgUrl4: '/images/strma/strma1.jpg'
  }
];

async function migratePoti() {
  try {
    await ensureDirectories();
    
    let poti = [];
    try {
      const data = await fs.readFile(dataFile, 'utf8');
      poti = JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        // If file doesn't exist, write initial data
        await fs.writeFile(dataFile, JSON.stringify(existingPoti, null, 2));
        return existingPoti;
      }
      throw error;
    }

    // If file exists but is empty or has no paths
    if (!Array.isArray(poti) || poti.length === 0) {
      await fs.writeFile(dataFile, JSON.stringify(existingPoti, null, 2));
      return existingPoti;
    }

    return poti;
  } catch (error) {
    console.error('Error migrating paths:', error);
    throw error;
  }
}

// GET handler
export async function GET() {
  try {
    await ensureDirectories();
    const poti = await migratePoti();
    return NextResponse.json(poti);
  } catch (error) {
    console.error('Error in GET:', error);
    return NextResponse.json({ error: 'Error reading paths' }, { status: 500 });
  }
}

// POST handler
export async function POST(request) {
  try {
    await ensureDirectories();
    
    const formData = await request.formData();
    const pot = {
      id: Date.now(),
      naslov: formData.get('naslov'),
      potekPoti: formData.get('potekPoti'),
      visinskaRazlika: formData.get('visinskaRazlika'),
      dolzinaPoti: formData.get('dolzinaPoti'),
      casHoje: formData.get('casHoje'),
      zahtevnostPoti: formData.get('zahtevnostPoti'),
      opisPoti: formData.get('opisPoti'),
    };

    // Handle images
    const imageFiles = ['imgUrl', 'imgUrl2', 'imgUrl3', 'imgUrl4'].map(key => ({
      key,
      file: formData.get(key)
    })).filter(item => item.file && item.file.size > 0);

    for (const { key, file } of imageFiles) {
      const fileName = `${Date.now()}-${file.name}`;
      const filePath = `/uploads/poti/${fileName}`;
      await fs.writeFile(
        path.join(process.cwd(), 'public', filePath),
        Buffer.from(await file.arrayBuffer())
      );
      pot[key] = filePath;
    }

    // Update JSON
    let poti = [];
    try {
      const data = await fs.readFile(dataFile, 'utf8');
      poti = JSON.parse(data);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }

    poti.push(pot);
    await fs.writeFile(dataFile, JSON.stringify(poti, null, 2));

    return NextResponse.json(pot);
  } catch (error) {
    console.error('Error in POST:', error);
    return NextResponse.json({ error: 'Error adding path' }, { status: 500 });
  }
}

// PUT handler
export async function PUT(request) {
  try {
    const formData = await request.formData();
    const id = parseInt(formData.get('id'));
    
    let poti = JSON.parse(await fs.readFile(dataFile, 'utf8'));
    const index = poti.findIndex(pot => pot.id === id);
    
    if (index === -1) {
      return NextResponse.json({ error: 'Path not found' }, { status: 404 });
    }

    const updatedPot = {
      ...poti[index],
      naslov: formData.get('naslov'),
      potekPoti: formData.get('potekPoti'),
      visinskaRazlika: formData.get('visinskaRazlika'),
      dolzinaPoti: formData.get('dolzinaPoti'),
      casHoje: formData.get('casHoje'),
      zahtevnostPoti: formData.get('zahtevnostPoti'),
      opisPoti: formData.get('opisPoti'),
    };

    // Handle images
    const imageFiles = ['imgUrl', 'imgUrl2', 'imgUrl3', 'imgUrl4'].map(key => ({
      key,
      file: formData.get(key)
    })).filter(item => item.file && item.file.size > 0);

    for (const { key, file } of imageFiles) {
      const fileName = `${Date.now()}-${file.name}`;
      const filePath = `/uploads/poti/${fileName}`;
      await fs.writeFile(
        path.join(process.cwd(), 'public', filePath),
        Buffer.from(await file.arrayBuffer())
      );
      updatedPot[key] = filePath;
    }

    poti[index] = updatedPot;
    await fs.writeFile(dataFile, JSON.stringify(poti, null, 2));

    return NextResponse.json(updatedPot);
  } catch (error) {
    console.error('Error in PUT:', error);
    return NextResponse.json({ error: 'Error updating path' }, { status: 500 });
  }
}

// DELETE handler
export async function DELETE(request) {
  try {
    const { id } = await request.json();
    
    let poti = JSON.parse(await fs.readFile(dataFile, 'utf8'));
    const potToDelete = poti.find(pot => pot.id === id);
    
    if (potToDelete) {
      // Delete associated images if they're in uploads directory
      ['imgUrl', 'imgUrl2', 'imgUrl3', 'imgUrl4'].forEach(async (key) => {
        const imagePath = potToDelete[key];
        if (imagePath && imagePath.startsWith('/uploads/')) {
          try {
            await fs.unlink(path.join(process.cwd(), 'public', imagePath));
          } catch (error) {
            console.error('Error deleting image:', error);
          }
        }
      });
    }

    poti = poti.filter(pot => pot.id !== id);
    await fs.writeFile(dataFile, JSON.stringify(poti, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in DELETE:', error);
    return NextResponse.json({ error: 'Error deleting path' }, { status: 500 });
  }
} 