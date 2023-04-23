# Nasıl bir etkinlik eklenir 

1. Bu repoyu forklayın
2. content/events.json dosyasına aşağıdaki formatı kullanarak etkinliği ekleyin
```json
{
    "title": "Etkinlik adı",
    "url": "Etkinlik için meetup.com bağlantısı varsa. Örn. https://www.meetup.com/yirmibir/events/vtnpvsydcjbqb/",
    "date": "Etkinlik tarihi `YYYY-MM-DD` formatında. Örn. 2023-06-12", 
    "venue": "Etkinlik mekanının adı. Örn. Craft Bira Fabrikası & Tadım Odası",
    "address": "Etkinlik mekanının adresi. Örn. İşçi Caddesi 3, Şişli İstanbul", 
    "city": "Etkinlik şehri. Örn. İstanbul",
    "country": "Etkinliğin gerçekleştiği ülke. Örn. Türkiye",
    "imgSrc": "Resmin mutlak yolu, `public/images` klasöründe uygun bir resim yoksa ekleyin. Örn. images/craft.webp"
  }

```
3. utils/pins.ts dosyasına etkinliğin gerçekleştiği şehir için X, Y pozisyonunu ekleyin. Pozisyonu haritada konuma tıklayarak elde edebilirsiniz ve tarayıcınızın konsolunda görüntülenir. Örn. 📍 {x: 139.5, y: 189}
4. main dalına doğru bir pull request oluşturun
