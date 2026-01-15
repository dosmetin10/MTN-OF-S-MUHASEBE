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

## Stok İçe Aktarma (CSV/XLSX)
Stok listesini Excel (.xlsx) veya CSV dosyasından içe aktarabilirsiniz.

**Gerekli kolonlar**
- **Stok Adı** (zorunlu)
- **Adet** (zorunlu)
- **Stok Kodu** (opsiyonel)

> Dosyanızda **“Stok Kodu (öneri)”** kolon adı varsa sistem bunu da **Stok Kodu** olarak kabul eder.

**Örnek CSV formatı**
```csv
Stok Kodu,Stok Adı,Adet
STK-0001,PEX 20mm Boru,120
STK-0002,Dirsek 90° 20mm,45
```

İçe aktarma sırasında:
- **Kolon eşleştirme** ekranı ile alanları seçebilirsiniz.
- Aynı stok varsa **güncelle** veya **yeni oluşturma** seçenekleri kullanılır.
- Hatalı satırlar için **CSV hata raporu** indirilebilir.

## Güncel Kurulum ve Çalıştırma (Hiç bilmeyenler için)
1) **Node.js kurun** (LTS sürümü önerilir).
2) **Projeyi indirin** ve bir klasöre çıkarın.
3) **Komut satırını açın** ve proje klasörüne girin:
```bash
cd MTN-OF-S-MUHASEBE
```
4) **Bağımlılıkları kurun:**
```bash
npm install
```
5) **Uygulamayı başlatın:**
```bash
npm start
```
Bu adımlardan sonra uygulama masaüstünde çalışır halde açılır.

## Yeni Başlayanlar için Adım Adım Geliştirme Rehberi
Bu uygulamayı **Paraşüt benzeri bir ön muhasebe + stok takip** yazılımına dönüştürmek için
aşağıdaki sırayı takip etmeniz önerilir. Her adım küçük bir hedef içerir, böylece sistemi
kolayca büyütebilirsiniz.

### 1) Temel Veri Yapısını Netleştirin
Öncelikle her modülün temel kayıtlarını düşünün:
- **Cari (Müşteri/Tedarikçi)**: adı, vergi no, telefon, bakiye
- **Stok**: ürün adı, birim, minimum stok, alış/satış fiyatı
- **Stok Hareketleri**: giriş-çıkış, tarih, miktar
- **Kasa/Bankalar**: hesap adı, giriş/çıkış kayıtları

Bu verileri sade tutmak, ileride rapor almayı kolaylaştırır.

### 2) Modülleri Parça Parça Bitirin
1. **Cari yönetimi** (cari ekle/düzenle, borç-alacak takip)
2. **Stok kartları + stok hareketleri**
3. **Kasa gelir/gider kayıtları**
4. **Teklif/Fatura**
5. **Raporlar (PDF)**

Her modül tamamlandığında test edip “çalışıyor” demeden bir sonrakine geçmeyin.

### 3) Raporlama ve Ekran Tasarımını Basitleştirin
Yeni başlayanlar için:
- Önce **en kritik ekranları** tamamlayın (Cari listesi, Stok listesi, Kasa listesi)
- Karmaşık raporları, en sona bırakın

### 4) Kullanıcı Dostu Hale Getirin
Programı hiç bilmeyen bir kullanıcı gibi düşünün:
- Her ekranda **kısa açıklamalar** ekleyin
- “Kaydet”, “Sil”, “Düzenle” gibi butonları netleştirin
- Hatalarda anlaşılır mesajlar verin

### 5) Sık Kullanılan Özellikleri Önceliklendirin
Türkiye’de KOBİ’ler için en kritik ihtiyaçlar:
- **Cari Borç/Alacak takibi**
- **Stok giriş-çıkış ve minimum stok alarmı**
- **Kasa günlük gelir-gider**
- **Fatura/Teklif şablonları**

Bu adımlar tamamlandığında, uygulamanız Paraşüt benzeri bir sisteme dönüşür.

## Geliştirme Yol Haritası (Öneri)
**Aşama 1 (MVP):**
- Cari yönetimi
- Stok kartları
- Kasa kayıtları

**Aşama 2:**
- Teklif/Fatura yönetimi
- PDF raporlar
- Arama & filtreleme

**Aşama 3:**
- Çoklu kullanıcı yetkileri
- Detaylı raporlama ve grafikler
- Bulut senkronizasyonu

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
