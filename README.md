# React Axios Kullanımı – Kullanıcı Listeleme Uygulaması

Bu proje, `axios` ile API'den veri çekme ve React bileşenlerinde asenkron veri yönetimini içeren basit bir kullanıcı listeleme uygulamasıdır.

## 📁 Dosyalar ve İşlevleri

- `lib/axios.js`  
  - Axios için özel bir instance oluşturur (`baseURL` tanımlıdır).

- `pages/Users.jsx`  
  - `jsonplaceholder.typicode.com/users` adresinden kullanıcı verilerini çeker.  
  - Yüklenme ve hata durumlarını yönetir.  
  - Gelen kullanıcıları liste olarak ekrana basar.

- `App.jsx`  
  - Ana uygulama bileşeni.  
  - `Users` bileşenini çağırır.

## 🚀 Kurulum ve Çalıştırma

```bash
npm install
npm run dev
