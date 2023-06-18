import {readFile, writeFile, unlink} from 'fs/promises';
import path from 'path';

export async function POST(request, response) {
  const data = await request.formData();
  const directoryJson = path.join(process.cwd(), 'src/db/coments.json');
  const contentJson = await readFile(directoryJson, 'utf8');
  const arr = JSON.parse(contentJson);

  const name = data.get('name');
  const country = data.get('country');
  const com = data.get('com');

  const objSave = {name,country,com};
  arr.push(objSave);

  unlink(directoryJson);

  writeFile(directoryJson, JSON.stringify(arr));
  return response.redirect(204, '/comentario');
}
