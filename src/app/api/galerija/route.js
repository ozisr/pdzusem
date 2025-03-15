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