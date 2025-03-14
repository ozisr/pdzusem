import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'novice.json');

// Ensure the data directory exists
async function ensureDataDir() {
  const dir = path.join(process.cwd(), 'data');
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir);
  }
}

// GET handler
export async function GET() {
  try {
    await ensureDataDir();
    try {
      const data = await fs.readFile(dataFile, 'utf8');
      return NextResponse.json(JSON.parse(data));
    } catch (error) {
      if (error.code === 'ENOENT') {
        // If file doesn't exist, create it with empty array
        await fs.writeFile(dataFile, '[]');
        return NextResponse.json([]);
      }
      throw error;
    }
  } catch (error) {
    console.error('Error in GET:', error);
    return NextResponse.json({ error: 'Error reading news' }, { status: 500 });
  }
}

// POST handler
export async function POST(request) {
  try {
    await ensureDataDir();
    
    const formData = await request.formData();
    const novica = {
      id: Date.now(), // Simple way to generate unique ID
      naslov: formData.get('naslov'),
      datum: formData.get('datum'),
      povzetek: formData.get('povzetek'),
      vsebina: formData.get('vsebina'),
    };

    // Handle image upload if present
    const slika = formData.get('slika');
    if (slika && slika.size > 0) {
      const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
      try {
        await fs.access(uploadsDir);
      } catch {
        await fs.mkdir(uploadsDir, { recursive: true });
      }

      const imageBuffer = await slika.arrayBuffer();
      const fileName = `${novica.id}-${slika.name}`;
      await fs.writeFile(
        path.join(uploadsDir, fileName),
        Buffer.from(imageBuffer)
      );
      novica.slika = `/uploads/${fileName}`;
    }

    // Read existing news
    let novice = [];
    try {
      const data = await fs.readFile(dataFile, 'utf8');
      novice = JSON.parse(data);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }

    // Add new news and save
    novice.unshift(novica); // Add to beginning of array
    await fs.writeFile(dataFile, JSON.stringify(novice, null, 2));

    return NextResponse.json(novica);
  } catch (error) {
    console.error('Error in POST:', error);
    return NextResponse.json({ error: 'Error adding news' }, { status: 500 });
  }
}

// DELETE handler
export async function DELETE(request) {
  try {
    const { id } = await request.json();
    
    // Read existing news
    const data = await fs.readFile(dataFile, 'utf8');
    let novice = JSON.parse(data);
    
    // Find and remove the news item
    novice = novice.filter(novica => novica.id !== id);
    
    // Save updated news
    await fs.writeFile(dataFile, JSON.stringify(novice, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in DELETE:', error);
    return NextResponse.json({ error: 'Error deleting news' }, { status: 500 });
  }
}

// PUT handler for editing
export async function PUT(request) {
  try {
    const formData = await request.formData();
    const id = parseInt(formData.get('id'));
    
    // Read existing news
    const data = await fs.readFile(dataFile, 'utf8');
    let novice = JSON.parse(data);
    
    // Find the news item to update
    const index = novice.findIndex(novica => novica.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'News not found' }, { status: 404 });
    }

    // Update the news item
    const updatedNovica = {
      ...novice[index],
      naslov: formData.get('naslov'),
      datum: formData.get('datum'),
      povzetek: formData.get('povzetek'),
      vsebina: formData.get('vsebina'),
    };

    // Handle image upload if present
    const slika = formData.get('slika');
    if (slika && slika.size > 0) {
      const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
      const fileName = `${id}-${slika.name}`;
      await fs.writeFile(
        path.join(uploadsDir, fileName),
        Buffer.from(await slika.arrayBuffer())
      );
      updatedNovica.slika = `/uploads/${fileName}`;
    }

    novice[index] = updatedNovica;
    await fs.writeFile(dataFile, JSON.stringify(novice, null, 2));
    
    return NextResponse.json(updatedNovica);
  } catch (error) {
    console.error('Error in PUT:', error);
    return NextResponse.json({ error: 'Error updating news' }, { status: 500 });
  }
} 