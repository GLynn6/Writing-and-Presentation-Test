# Writing Week 1
## Unix Command Line

<ul>
<li>CLI (Command Line Interface) <br> 
Adalah baris perintah yang dituliskan oleh user untuk menjalankan suatu instruksi pada sistem operasi yang dilakukan di terminal. CLI merupakan shell yang berbasis teks </li> <br>

<li> Shell <br> 
Shell adalah sebuah program atau penterjemah perintah yang menjembatani user dengan sistem operasi, dimana user dapat mengetikkan perintah-perintah kemudian diteruskan oleh shell lalu di eksekusi oleh system </li> <br>

<li> Shell <br>
 Selain CLI shell juga ada yang berbasis GUI (Graphical User Interface). Ada beberapa macam GUI & CLI antara lain yaitu : 
 <p><br> Graphical User Interface </p>
 <ul> <li>Windows</li>
 <li>Mac OS</li>
 <li>Ubuntu</li>
</ul>
<p> <br> Command Line Interface
 <ul><li>Sh</li>
 <li>Bash</li>
 <li>Cmd.exe</li></ul> </ul> <br>

 <ul> <li>Filesystem <br>
File System merupakan struktur logika yang digunakan untuk mengendalikan akses terhadap data yang ada pada disk. Contoh dalam Sistem Operasi Windows struktur file yang disimpan menggunakan struktur yang bentuknya mirip sebuah pohon seperti gambar dibawah. <br>

<img src="gambar/tree file sytem.png"> <br> </ul>

<ul> <li> Command <br>
Command untuk melakukan navigasi :

<ul> <br> <li> pwd - mencari path dari direktori (folder) yang digunakan saat ini.</li>
<li> ls - untuk melihat isi file yang ada di
sebuah direktori.</li>
<li> cd <'directory>  - untuk berpindah direktori.</li> </ul> <br>

Command untuk memanipulasi file dan direktori :
<ul> <li> touch - untuk membuat sebuah file </li>
<li> mkdir - untuk membuat sebuah direktori </li>
<li> head - untuk melihat beberapa line awal dari sebuah file text </li>
<li> tail - untuk melihat beberapa line awal dari sebuah file text </li>
<li> cp - untuk mengcopy files atau directory </li>
<li> mv - untuk memindahkan files atau directory. Bisa
digunakan untuk rename.</li>
<li> rm - untuk menghapus file atau directory </li>
<li> cat - untuk melihat isi sebuah file </li>
<li> cat - untuk melihat isi sebuah file </li>
 </ul> </ul> 

&nbsp;

 ## Git & Github

<ul> <li> Pengertian Git dan Github <br> </li>
<ul><br><li>Pengertian Git <br>
Git merupakan software berbasis Version Control System (VCS) yang bertugas untuk mencatat perubahan seluruh file atau repository suatu project. </li> </ul>

<ul><br><li>Version Control System (VCS) <br>
VCS adalah sebuah sistem yang melakukan source code management (SCM) )untuk mengelola perubahan di setiap dokumen, program komputer, website, dan kumpulan pemrograman lainnya. </li> </ul> 
<ul><br><li>Github<br>
GitHub adalah website yang digunakan untuk menyimpan dan mengelola kode suatu project. </li> </ul> </ul>

&nbsp;

- Command Git 

    - Setup Awal <br>
        Menentukan nama pengguna dan alamat email untuk informasi commit nantinya

        <img src= "gambar/global.png">
    
    - git init <br>
        git init digunakan untuk membuat repository di file
    
    - git status <br>
        git status digunakan untuk mengetahui sebuah status dari sebuah repository lokal

        <img src="gambar/status.png">
    
    - git add <br>
        Perintah yang digunakan untuk menambahkan file baru di repository yang dipilih dengan menggunakan code "git add ." atau  "git add nama file" <br>

        <img src="gambar/git add.png">

    - git push 
        git push digunakan dalam mengirimkan perubahan file yang dilakukan setelah di commit ke remote repository

        <img src = "gambar/gitpush.png">

&nbsp;

## HTML

- Apa itu HTML 

    Hypertext Markup Language adalah bahasa markup standar untuk dokumen yang dirancang untuk ditampilkan dihalaman website.

    HTML bukanlah sebuah bahasa pemrograman, artinya HTML tidak bisa dinamis mengolah data.

   <br>

- Struktur HTML

    HTML memikiliki sebuah struktur dasar yaitu sebagai berikut :

    ```html
    <html>
        <head>
            <title>Judul Website </title>
        </head>

        <body>
            Hi.. I'am Febrianto
        </body>

    </html>
    ```

    Setiap halaman HTML sudah pasti mempunyai struktur dasar yang terdiri dari : tag html, tag head, dan tag body. Ini lah struktur dasar dari HTML. Tag head umumnya berisi elemen yang tidak tampak pada browser seperti judul website, tag body sebaliknya, berisi elemen yang akan tampak pada browser. Seperti paragraf, memasukkan gambar, dan lain-lain.

    <br>

- Anatomy HTML

    Tiga istilah utama ketika menulis HTML. Ketiga istilah tersebut ialah elemen, tag, dan atribut.
    
    <br>

- Element HTML 

    HTML Element merupakan sebuah komponen dalam halaman web, bisa berupa paragraf, judul, atau gambar. Struktur dari sebuah HTML element dapat digambarkan seperti ini :

    <img src = "gambar/element.png">

    <br>

- Tag HTML

    Tag adalah suatu tanda pengenal dokumen pada html yang terdiri 2 bagian yaitu tag pembuka contoh dan tag penutup  Tag dibuat dengan kurung siku <...>, lalu di dalamnya terdapat nama tag dan kadang juga ditambahkan dengan atribut. Tag menandakan akhir terdapat sebuah tanda "/". 
    
    <br>

    Ada beberapa contoh tag sebagai berikut  :

    - Membuat Header

        ``` html 
        <h1> Hi... I'am Febrianto </h1>
        ```

        hasil pada browser

         <img src = "gambar/h.PNG">

        <br>
    
    - Membuat Paragraf

        ``` html
        <p> Ini paragraf </p>
        ```

        tampilan pada browser

        <img src = "gambar/p.PNG">

        <br>
    
    - Membuat  link pada halaman web

        ``` html
        <a href= "https://skilvul.com/">Skilvul</a>
        ```

        tampilan pada browser

        <img src = "gambar/link.PNG" width = "445">

        <br>

    - Membuat huruf tebal dan miring

        ```html
        <b>Ini tulisan tebal</b> 
        
        <i>Ini tulisan miring </i>
        ```

        tampilan pada browser

        <img src="gambar/b.png" width = "445">

    <br>

    - Manampilkan gambar
        
        ```html
        <img src="https://id.pinterest.com/pin/578008933439423985/" alt="cute" />
        ```

        tampilan pada browser

        <img src="gambar/img.png" width="445">
   
&nbsp;

- Attribut HTML

    Attribute adalah properties dari sebuah HTML Element. Semua HTML Element memiliki attribute. Di dalam Opening Tag dapat berisi attribute, yang berfungsi untuk memberikan informasi tambahan kepada sebuah element.

    Contoh penggunaan attribute :
    ``` html
    <img width="80%" src="https://id.pinterest.com/pin/578008933439423985/" />
    ```

    Pada kode di atas, tag <img> memiliki dua attribute:

    - width yang berfungsi untuk menentukan lebar dari element gambar, dan diberikan value (nilai) lebar sebesar 80%
    -   src yang berfungsi untuk menentukan sumber gambar, dan diberikan value (nilai) untuk diarahkan ke tautan.


&nbsp;

## CSS 

- Apa itu CSS 

    CSS adalah singkatan dari cascading style sheets, yaitu bahasa yang digunakan untuk menentukan tampilan dan format halaman website. Dengan CSS, bisa mengatur jenis font, warna tulisan, dan latar belakang halaman.

    <br>

- Structur CSS

    Struktur kode CSS terdiri dari tiga bagian yaitu Selektor, Blok Deklarasi Properti dan value.

    <img src = "gambar/css.png" width="485">

<br>

- Penggunaan CSS

    Ada 3 cara untuk menyisipkan CSS ke dalam HTML, yaitu :
    
    - Inline CSS

        Inline CSS menggunakan attribute style untuk menyisipkan kode CSS langsung di dalam HTML element.

        ```html
        <h3 style="color:blue;"> Hi... I'am Febrianto </h3>
        ```

        tampilan pada browser

        <img src="gambar/inline.png">

    <br>

    - internal CSS

        Internal CSS menggunakan element (<..style..>) untuk menyisipkan kode CSS. Element (<..style..>) tersebut diletakkan di dalam element (<..head..>).

        ```html
        <html lang="en">
            <head>
                <title>Document</title>
                <style>
                    body {
                        background-color: deepskyblue;
                    }
                    h3{
                    background-color: yellow;
                }

                </style>
            </head>
            <body>
                <h3> Hi... I'am Febrianto </h3>
            </body>
        </html>
        ```

        tampilan pada browser

        <img src = "gambar/internal.png">










        

      
     






