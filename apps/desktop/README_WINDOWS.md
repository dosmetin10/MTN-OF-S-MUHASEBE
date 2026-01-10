Bu klasör `apps/desktop` içindeki uygulamayı Windows için paketlemek ve yükleyici oluşturmak üzere yönerge içerir.

Gereksinimler (Windows makinede önerilir):
- Node.js (16+)
- npm veya pnpm
- Git

Adımlar (Windows üzerinde):
1. Depoyu klonlayın ve `apps/desktop` dizinine geçin:

   cd <repo>
   cd apps/desktop

2. Bağımlılıkları kurun:

   npm install

3. Üretim dosyalarını oluşturun ve Windows installer (.exe) üretin:

   npm run dist:win

Oluşan çıktı `apps/desktop/release` veya kök `release` dizininde olacaktır (konfigürasyona bağlı olarak).

Notlar ve ipuçları:
- `build/icon.ico` dosyasını projenize ekleyin; NSIS kurulum sihirbazı bunu kullanır.
 - `build/icon.ico` dosyasını projenize ekleyin; NSIS kurulum sihirbazı bunu kullanır.
 - Splash ekran için `src/renderer/assets/logo.png` (ve/veya `build/logo.png`) ekleyin. `splash.html` bu resmi kullanır.
- Kod imzalama gerekiyorsa, Windows ortamında sertifika ve `electron-builder` konfigürasyonu ekleyin.
- Eğer Windows makineniz yoksa ve Linux üzerinde Windows installer üretmek isterseniz `wine` ve `nsis` gerekir; bu işlem karmaşık olabilir ve tavsiyem doğrudan Windows üzerinde paketlemektir.

Hata durumlarında `apps/desktop/package.json` içindeki `build` bölümünü kontrol edin ve gerekli icon/ek ayarların bulunduğundan emin olun.

İletişim: İsterseniz ben bu adımları CI için bir GitHub Actions workflow'u olarak ekleyebilirim.
