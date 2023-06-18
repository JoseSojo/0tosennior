
import {promises as fs} from 'fs';
import path from 'path';

export async function GET(request) {
  //const data = await request.formData();

  const directoryJson = path.join(process.cwd(), 'src/db/coments.json');

  const contentJson = await fs.readFile(directoryJson, 'utf8');

  return new Response(contentJson);
}
