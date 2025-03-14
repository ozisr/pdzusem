import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'galerija.json');
const uploadsDir = path.join(process.cwd(), 'public', 'uploads', 'galerija');

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

const existingImages = [
  {
    original: '/images/galerija/JESEN 2 (L.Š.P.).jpeg',
    thumbnail: '/images/galerija/JESEN 2 (L.Š.P.).jpeg',
  },
  {
    original: '/images/galerija/julij4.jpg',
    thumbnail: '/images/galerija/julij4.jpg',
  },
  {
    original: '/images/galerija/JUNIJ3.jpg',
    thumbnail: '/images/galerija/JUNIJ3.jpg',
  },
  {
    original: '/images/galerija/junij4.jpg',
    thumbnail: '/images/galerija/junij4.jpg',
  },
  {
    original: '/images/galerija/MAJ.JPG',
    thumbnail: '/images/galerija/MAJ.JPG',
  },
  {
    original: '/images/galerija/MAJ3.JPG',
    thumbnail: '/images/galerija/MAJ3.JPG',
  },
  {
    original: '/images/galerija/marec4.jpg',
    thumbnail: '/images/galerija/marec4.jpg',
  },
  {
    original: '/images/galerija/NOVEMBER.jpg',
    thumbnail: '/images/galerija/NOVEMBER.jpg',
  },
  {
    original: '/images/galerija/REZERVA POMLAD (PDŽ).JPG',
    thumbnail: '/images/galerija/REZERVA POMLAD (PDŽ).JPG',
  },
  {
    original: '/images/galerija/rezerva pomlad.JPG',
    thumbnail: '/images/galerija/rezerva pomlad.JPG',
  },
  {
    original: '/images/galerija/SEPTEMBER.jpeg',
    thumbnail: '/images/galerija/SEPTEMBER.jpeg',
  },
  {
    original: '/images/galerija/zadnja stran4.jpg',
    thumbnail: '/images/galerija/zadnja stran4.jpg',
  },
  {
    original: '/images/galerija/ZIMA 1 (N.P.).jpg',
    thumbnail: '/images/galerija/ZIMA 1 (N.P.).jpg',
  },
  {
    original: '/images/galerija/ZIMA 12 (N.P.).jpg',
    thumbnail: '/images/galerija/ZIMA 12 (N.P.).jpg',
  },
  {
    original: '/images/galerija/žusem 2022 006.JPG',
    thumbnail: '/images/galerija/žusem 2022 006.JPG',
  },
  {
    original: '/images/galerija/žusem 2022 007.JPG',
    thumbnail: '/images/galerija/žusem 2022 007.JPG',
  },
  {
    original: '/images/galerija/žusem 2022 008.JPG',
    thumbnail: '/images/galerija/žusem 2022 008.JPG',
  },
  {
    original: '/images/galerija/žusem 2022 010.JPG',
    thumbnail: '/images/galerija/žusem 2022 010.JPG',
  },
  {
    original: '/images/galerija/žusem 2022 017.JPG',
    thumbnail: '/images/galerija/žusem 2022 017.JPG',
  },
  {
    original: '/images/galerija/žusem 2022 028.JPG',
    thumbnail: '/images/galerija/žusem 2022 028.JPG',
  },
  {
    original: '/images/galerija/žusem 2022 036.JPG',
    thumbnail: '/images/galerija/žusem 2022 036.JPG',
  },
  {
    original: '/images/galerija/žusem 2022 058.JPG',
    thumbnail: '/images/galerija/žusem 2022 058.JPG',
  }
];

async function migrateExistingImages() {
  try {
    let images = [];
    try {
      const data = await fs.readFile(dataFile, 'utf8');
      images = JSON.parse(data);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }

    if (images.length === 0) {
      const migratedImages = existingImages.map((image, index) => ({
        id: index + 1,
        ...image
      }));

      await fs.writeFile(dataFile, JSON.stringify(migratedImages, null, 2));
      return migratedImages;
    }

    return images;
  } catch (error) {
    console.error('Error migrating images:', error);
    throw error;
  }
}

export async function GET() {
  try {
    await ensureDirectories();
    const images = await migrateExistingImages();
    return NextResponse.json(images);
  } catch (error) {
    console.error('Error in GET:', error);
    return NextResponse.json({ error: 'Error reading gallery' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await ensureDirectories();
    
    const formData = await request.formData();
    const file = formData.get('image');
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = `/uploads/galerija/${fileName}`;
    
    // Save file
    await fs.writeFile(path.join(process.cwd(), 'public', filePath), buffer);

    // Update JSON
    let images = [];
    try {
      const data = await fs.readFile(dataFile, 'utf8');
      images = JSON.parse(data);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }

    const newImage = {
      id: Date.now(),
      original: filePath,
      thumbnail: filePath, // Using same image for thumbnail
    };

    images.unshift(newImage);
    await fs.writeFile(dataFile, JSON.stringify(images, null, 2));

    return NextResponse.json(newImage);
  } catch (error) {
    console.error('Error in POST:', error);
    return NextResponse.json({ error: 'Error uploading image' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    
    let images = [];
    const data = await fs.readFile(dataFile, 'utf8');
    images = JSON.parse(data);
    
    const imageToDelete = images.find(img => img.id === id);
    if (imageToDelete && imageToDelete.original.startsWith('/uploads/')) {
      try {
        await fs.unlink(path.join(process.cwd(), 'public', imageToDelete.original));
      } catch (error) {
        console.error('Error deleting file:', error);
      }
    }

    images = images.filter(img => img.id !== id);
    await fs.writeFile(dataFile, JSON.stringify(images, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in DELETE:', error);
    return NextResponse.json({ error: 'Error deleting image' }, { status: 500 });
  }
} 