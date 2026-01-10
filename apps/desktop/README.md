# MTN OFS Desktop

Bu klasör Electron ana uygulamasını ve React arayüzünü içerir.

## Kurulum Planı (electron-builder)

Paketleme ve dağıtım için **electron-builder** kullanılması planlandı. `package.json`
altındaki `build` ayarları çıktıları `release/` klasörüne üretir.

Önerilen akış:

1. Geliştirme: `npm run dev`
2. Renderer derleme: `npm run build:renderer`
3. Uygulama paketi: `npm run build`
