# MTN Muhasebe
MTN ENERJİ MÜHENDİSLİK Masaüstü Muhasebe Uygulaması

## Özellikler
- ✅ **Cari Yönetimi**: Müşteri/Tedarikçi kartları ve bakiye takibi
- ✅ **Stok & Depo**: Malzeme kartları, seviye takibi ve hareket kayıtları
- ✅ **Teklif & Fatura**: Satış teklifleri ve fatura oluşturma
- ✅ **Kasa & Banka**: Gelir/gider işlemleri ve nakit akış takibi
- ✅ **Raporlar**: PDF raporlar (Cari, Stok, Satış, Kasa özeti)
- ✅ **Yedekleme**: Yerel ve bulut senkronizasyonu
- ✅ **Çoklu Kullanıcı**: Giriş ekranı ve kullanıcı yönetimi
- ✅ **Çevrimdışı Mod**: Tüm veriler yerel olarak saklanır

## Kullanım
```bash
npm install
npm start
```

## İnşa Etme
```bash
npm run dist   # Windows NSIS installer oluştur
npm run pack   # Portabl sürüm oluştur
```

## Otomatik Kurulum (Windows)
Uygulamayı otomatik kurulumla yüklemek için şu adımları izleyin:

1) **Installer (Setup) üretin**
```bash
npm run dist
```
Bu komut, `dist/` klasörü altında **tek tıkla kurulum** yapan bir Windows installer (NSIS) üretir.

2) **Kurulum dosyasını çalıştırın**
- `dist/` klasöründeki `MTN Muhasebe Setup.exe` benzeri dosyayı **çift tıklayın**.
- Kurulum **otomatik** ilerler ve masaüstü + başlat menüsü kısayolları oluşturur.

3) **Uygulamayı açın**
- Masaüstündeki veya Başlat Menüsü’ndeki kısayoldan uygulamayı çalıştırın.

## Giriş Bilgileri (Test)
- Kullanıcı: `mtn` veya `muhasebe`
- Şifre: `1453`

## Teknoloji
- **Electron**: Masaüstü uygulaması
- **Node.js**: Backend işlemleri
- **HTML5/CSS3**: UI
- **PDF Raporlama**: Yazdırma ve PDF export

## Struktur
```
src/
├── main.js           # Electron main process
├── preload.js        # IPC context bridge
└── renderer/
    ├── index.html    # UI
    ├── app.js        # UI logic
    ├── styles.css    # Styling
    └── assets/       # Resimler
```

## Versiyon
0.1.0 - İlk stabil sürüm

---
*Mevcut durum: ✅ Tamamlanmış ve dağıtıma hazır*
