import fs from 'fs-extra';
import path from 'path';

const THEMES_DIR = './themes';
const OUTPUT_FILE = './index.json';

async function buildRegistry() {
  try {
    const registry = {};
    const files = await fs.readdir(THEMES_DIR);

    for (const file of files) {
      if (file.endsWith('.json')) {
        const filePath = path.join(THEMES_DIR, file);
        const themeData = await fs.readJson(filePath);
        
        // Ключ в реестре будет в формате "author/name", как мы и парсим в CLI
        const registryKey = `${themeData.author}/${themeData.name}`.toLowerCase();
        
        registry[registryKey] = themeData;
      }
    }

    await fs.writeJson(OUTPUT_FILE, registry, { spaces: 2 });
    console.log(`📦 Реестр успешно собран! Добавлено тем: ${Object.keys(registry).length}`);
  } catch (err) {
    console.error('Ошибка сборки реестра:', err);
    process.exit(1);
  }
}

buildRegistry();
