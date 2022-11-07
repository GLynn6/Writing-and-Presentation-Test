# Writing Test Week 2 Back-End Bootcamp

## Intro Database

-   **Database** adalah kumpulan data yang disimpan dengan sistem tertentu, dan saling berhubungan, sehingga dapat dikelola dengan mudah.

-   Untuk membuat Database diperlukan sebuah software yang dinamakan dengan DBMS(Database Management System)

-   **Database Management System atau DBMS** adalah software yang digunakan untuk mengelola, menyimpan, dan mengambil database. Software ini menyediakan antarmuka yang memungkinkan user membaca, membuat, menghapus, dan memperbarui data.

-   Contoh DBMS yang sering digunakan

    -   MySql
    -   PostgreSQL
    -   MongoDB
    -   Oracel Database

- Istilah pada Database

    -   ``Table``

        Tabel ialah koleksi data berhubungan disimpan pada format tabel dalam suatu pangkalan data yang terdiri akan kolom dan baris

        ![](./img/tabel.png)
    
    -   ``Field``

        kumpulan berbagai karakter didalam database yang mempunyai arti didalamnya.

        ![](./img/field.png)

    -   ``Record``

        Record merupakan kumpulan nilai yang saling terkait. Record merupakan isi dari sebuah tabel.

        ![](./img/record.png)


-   **SQL atau Structured Query Language** merupakan suatu bahasa (Language) yang digunakan untuk mengakses database. Yang bisa dilakukan SQL antara lain yaitu Membuat, Menampilkan, menghapus, dan Mengatur “Permission” . 

-   **DDL (Data Definition Language)** perintah SQL yang digunakan untuk membuat, mengubah dan menghapus struktur dan definisi metadata dari objek-objek Database.

    -   ``Create tabel``

        Dengan menggunakan perinta "create tabel nama tabel (isi tabel)"

        ![](./img/codecreate.png)
        ![](./img/createtabel.png)
    
    -   ``DROP`` 

        Digunakan untuk menghapus Database, Table, dan View atau Index.
    
    -   ``Alter Tabel``

        Alter digunakan untuk mengubah struktur dari tabel yang ada, seperti untuk menambahkan atau menghapus kolom/field. Contoh menambah kolom baru dengan menggunakan kode "alter table product add jenis varchar(25);"

        ![](./img/alter.png)
    
-   **DML (Data Manipulation Language)**  merupakan perintah untuk membantu pengguna memanipulasi data dalam database. Beberapa contoh perintah DML sebagai berikut :


    - ``INSERT`` Digunakan untuk memasukkan data ke kolom-kolom yang terdapat pada tabel/view.

        ![](./img/insert.png)


    -   ``SELECT`` Digunakan untuk menyeleksi data berdasarkan syarat yang diberikan.

        ![](./img/select.png)

    - ``UPDATE`` Digunakan untuk melakukan editing pada isi dari kolom (field) yang dipilih.

        ![](./img/update.png)

   
    - ``DELETE`` Digunakan untuk menghapus data dalam tabel yang menjadi target.

        ![](./img/delete.png)


## Authentication & Authorization in Express JavaScript Authentication

-   **Authentication**  adalah sebuah proses validasi atau pembuktian identitas terhadap pengguna yang ingin mengakses suatu file, aplikasi, atau sistem tertentu.


-   Seorang user melakukan login kedalam suatu infrastruktur jaringan dan sistem mengenali user ID dan menerimanya untuk kemudian diberikan akses, sesuai dengan authorisasi yang dia terima.

-  **Authorization** adalah proses penentuan apakah user tersebut diijinkan / ditolak untuk melakukan satu atau beberapa action atau akses terhadap resources tertentu dalam system.

- Apa itu **JSON Web Token**
    JWT adalah singkatan dari JSON Web Token yaitu sebuah JSON Object yang digunakan untuk aktifitas transfer informasi antar platform.

    token ini berbentuk string panjang yang sangat random, lalu token ini memungkinkan kita untuk mengirimkan data yang dapat diverifikasi oleh dua pihak atau lebih.

- Cara kerja **JSON Web Token**

    Server akan melakukan generate token yang mensertifikasi identitas user, dan mengirimkannya ke klien. Klien akan mengirim token kembali ke server untuk setiap request ke API, sehingga Server side akan bisa mengetahui asal dari request tersebut.

-   Struktur **JSON Web Token**

    Struktur JWT sebagai berikut

     -   ``Header``

            Header biasanya terdiri dari dua bagian: jenis token, yaitu JWT, dan algoritma penandatanganan yang digunakan
        
            ```js
            {
                "alg": "HS256",
                "typ": "JWT"
            }
            ```
    
    -   ``Payload``

        Bagian kedua disebut dengan payload. Payload berisi data yang ingin dikirim melalui token.

        ```JS
        {
            "username": "febrianto",
            "password": "123"
        }

    -   ``Signature``
    
        Signature adalah hasil dari Hash atau gabungan dari isi encode Header dan Payloadnya lalu ditambahkan kode secretnya. Signature ini berguna untuk memverifikasi bahwa header maupun payload yang ada dalam token tidak berubah dari nilai aslinya (karena untuk membuat payload dan header palsu itu cukup mudah).

        ```js
        HMACSHA256(
            base64UrlEncode(header) + "." +
            base64UrlEncode(payload),
            secret)
        ```
         Dan hasil ketiga bagian tersebut akan digabung dan otomatis di encode menjadi Token string random panjang seperti berikut

            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZlYnJpYW50byIsInBhc3N3b3JkIjoiMTIzIn0.sMIyiJsRNXGEvhpV3SK-rR-riBBAsakD6qG0wZw8TFs
## 	Sequelize

-   **Sequelize** adalah Node.js promise-based ORM untuk MySQL, PostgreSQL, SQLite, MSSQL dan database SQL lainnya.

-   **Sequelize** berfungsi  untuk bekerja dengan database dan relasi-relasi di dalamnya. Sehingga pada saat deployment tidak perlu melakukan perubahan konteks saat menuliskan kode karena sudah membuat interaksi menggunakan bahasa Javascript melalui api yang sudah disediakan oleh Sequelize.

-   Apa itu ORM?

    ORM (Object Relation Mapping) merupakan teknik yang merubah suatu table menjadi sebuah object yang nantinya mudah untuk digunakan. Object yang dibuat memiliki property yang sama dengan field yang ada pada table tersebut.

    ORM memungkinkan kita melakukan query dan memanipulasi data di database menggunakan object oriented.

-   Penggunaan Sequlize

    -   Installation Sequelize
        Menginstall sequelize cli agar dapat menjalankan generator, dengan menggunakan perintah "npm or yarn install sequelie"

            $ npm install sequelize


    -   Mengintsall driver sql yang digunakan untuk menghubungkan database maka sequelize membutuhkan libary tambahan, contoh dengan menggunakan Mysql
        
            $ npm install mysql2

    -   Generate Sequelize

        Melakukan inisialisasi di project kita terlebih dahulu agar dapat melakukan generate code

            $ npx sequelize-cli init

        Lalu ototmatis akan menambahkan folder seperti pada gambar dibawah ini

        ![](./img/folder.png)


    - Membuat Model

         Membuat table user dengan field seperti gambar di bawah ini 

            $ sequelize-cli model:generate --name User --attributes name:string,email:string,password

         Akan menghasilkan file dengan nama user.js pada folder model yang hasilnya seperti berikut.

         <img src="./img/hasilmodel" width="350"/>

    -   Migrate Model

        Model yang telah dibuat, hanya sebtas file saja. Untuk mengubah file model ke tabel pada database maka lakukan migrate db dengan perintah berikut.

            $ npx sequelize-cli db:migrate

        <img src="./img/migration" width="350"/>
        

        Jika ada yang salah, kita bisa mengembalikan (undo) menggunakan

            $ npx sequelize-cli db:migrate:undo

        file migration akan menjalankan sebuah perintah, misal pada gambar diatas menjalankan perintah membuat tabel yaitu "createTable" dan kemudian "dropTabel" pada async down ketika ingin kita mengembalikan atau undo. 









    






