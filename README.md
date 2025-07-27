# Nest.js Kullanıcı Yönetim Uygulaması

Bu proje, modern ve güçlü bir Node.js çerçevesi olan Nest.js kullanılarak geliştirilmiş CRUD (Oluşturma, Okuma, Güncelleme, Silme) kullanıcı yönetim uygulamasıdır. Kullanıcı verilerini bir veritabanında yönetmek için temel işlevsellik sağlar. Uygulama, kullanıcıları görüntülemek ve yeni kullanıcılar eklemek için web tabanlı bir arayüze sahiptir ve veritabanı etkileşimleri için popüler bir ORM olan Prisma'yı kullanır.

## Öne Çıkan Özellikler

-   **Kullanıcı Listeleme**: Veritabanındaki tüm kayıtlı kullanıcıları adları ve e-posta adresleriyle listeleyin.
-   **Yeni Kullanıcı Ekleme**: Bir form aracılığıyla sisteme yeni kullanıcılar ekleyin (yalnızca ad ve e-posta adresleri gereklidir).
-   **Prisma ORM Entegrasyonu**: Veritabanı işlemleri için tip güvenli ve güçlü bir ORM olan Prisma kullanılır, bu da veritabanı etkileşimlerini kolaylaştırır.
-   **Sunucu Tarafı Renderlama**: Handlebars (HBS) şablon motoru kullanılarak sunucu tarafında HTML sayfaları oluşturulur, bu da hızlı ilk yükleme süreleri ve SEO dostu uygulamalar sağlar.
-   **Duyarlı Yönlendirme**: Yeni bir kullanıcı eklendikten sonra kullanıcı listesi sayfasına otomatik yönlendirme yapılır.

## Teknik Yığın

-   **Çerçeve**: Nest.js
-   **Veritabanı ORM**: Prisma
-   **Şablon Motoru**: Handlebars (HBS)
-   **Geliştirme Dili**: TypeScript
-   **Paket Yöneticisi**: npm (veya Yarn)

## Kurulum ve Çalıştırma

Bu projeyi yerel geliştirme ortamınızda kurmak ve çalıştırmak için aşağıdaki adımları izleyin.

### Önkoşullar

Başlamadan önce sisteminizde aşağıdakilerin kurulu olduğundan emin olun:

-   **Node.js**: `v16.x` veya daha yüksek bir LTS (Uzun Süreli Destek) sürümü önerilir.
-   **npm** veya **Yarn**: Node.js ile birlikte gelir, ancak en son sürüm için güncellemeyi düşünebilirsiniz.
-   **Veritabanı**: Prisma tarafından desteklenen herhangi bir veritabanı (örn. PostgreSQL, MySQL, SQLite, SQL Server). Geliştirme için SQLite genellikle en basit seçenektir.

### Adımlar

1.  **Depoyu Klonlayın**: Proje deposunu yerel makinenize indirin:

    ```bash
    git clone [https://github.com/](https://github.com/)<kullanıcı_adınız>/<depo_adınız>.git
    cd <proje_dizini>
    ```
    (Lütfen `<kullanıcı_adınız>` ve `<depo_adınız>` yerine gerçek GitHub kullanıcı adınızı ve depo adınızı yazın.)

2.  **Bağımlılıkları Yükleyin**: Projenin tüm bağımlılıklarını kurun:

    ```bash
    npm install
    # veya eğer Yarn kullanıyorsanız
    yarn install
    ```

3.  **Prisma'yı Yapılandırın**:
    * **Veritabanı Şeması**: `prisma/schema.prisma` dosyasını açın. `provider` değerini kullanmak istediğiniz veritabanına (örn. `postgresql`, `mysql`, `sqlite`) ayarlayın.
    * **Çevre Değişkeni**: Projenin kök dizininde bir `.env` dosyası oluşturun ve veritabanı bağlantı dizenizi tanımlayın. Örneğin, SQLite için:
        ```env
        DATABASE_URL="file:./dev.db"
        ```
        PostgreSQL için:
        ```env
        DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase?schema=public"
        ```
    * **Prisma İstemcisini Oluşturun**: Aşağıdaki komutu çalıştırarak Prisma istemcisini oluşturun ve veritabanı şemasını uygulayın. Bu, veritabanınızı başlatacak ve tabloları oluşturacaktır:
        ```bash
        npx prisma generate
        npx prisma migrate dev --name init
        ```
        `--name init` kısmı, ilk geçişin adıdır. Daha sonra şemayı değiştirirseniz yeni geçişler oluşturmak için bu komutu tekrar kullanabilirsiniz.

4.  **Uygulamayı Çalıştırın**: Uygulamayı geliştirme modunda başlatın:

    ```bash
    npm run start:dev
    # veya
    yarn start:dev
    ```
    Uygulama başarıyla başlatıldıktan sonra, genellikle `http://localhost:3000` adresinden erişilebilir olacaktır. Tarayıcınızı açın ve bu adrese gidin.



## API Uç Noktaları

Uygulama şu anda iki ana uç nokta sunmaktadır:

-   **`GET /users`**: Kayıtlı tüm kullanıcıları listeleyen web sayfasını görüntüler. Bu sayfa, mevcut kullanıcıların adlarını ve e-posta adreslerini gösterir ve yeni bir kullanıcı eklemek için bir form içerir.
-   **`POST /users`**: Yeni bir kullanıcı oluşturmak için kullanılır. Form verilerini (isim ve e-posta) alır, veritabanına kaydeder ve ardından kullanıcı listesi sayfasına geri yönlendirir.

## Testler

Proje, temel Nest.js kontrolcü ve servis testlerini içerir:

-   `app.controller.spec.ts`: Ana uygulama kontrolcüsü için örnek bir test dosyası.
-   `users.service.spec.ts`: Kullanıcı hizmeti için temel birim testleri, hizmetin tanımlı olup olmadığını kontrol eder.

Testleri çalıştırmak için:

```bash
npm run test
# veya
yarn test
