const input = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");

// =========================
// ENTER
// =========================

input.addEventListener("keydown", function(e){

    if(e.key==="Enter"){

        sendMessage();

    }

});

// =========================

function getTime(){

    const now = new Date();

    return now.getHours().toString().padStart(2,"0")
    + ":"
    + now.getMinutes().toString().padStart(2,"0");

}

// =========================

function addMessage(sender,message){

    const wrapper=document.createElement("div");

    wrapper.className=sender;

    wrapper.innerHTML=`

        <div class="bubble">

            ${message}

        </div>

        <div class="time">

            ${getTime()}

        </div>

    `;

    chatBox.appendChild(wrapper);

    chatBox.scrollTop=chatBox.scrollHeight;

}

// =========================

function sendMessage(){

    const text=input.value.trim();

    if(text==="") return;

    addMessage("user",text);

    input.value="";

    setTimeout(()=>{

        typing(text.toLowerCase());

    },500);

}

// =========================

function typing(message){

    const wrapper=document.createElement("div");

    wrapper.className="bot";

    wrapper.innerHTML=`

        <div class="bubble">

            ✍️ DuHa AI sedang mengetik...

        </div>

    `;

    chatBox.appendChild(wrapper);

    chatBox.scrollTop=chatBox.scrollHeight;

    setTimeout(()=>{

        wrapper.remove();

        botReply(message);

    },1200);

}

// =========================

function botReply(msg){

    let reply="";

    if(msg.includes("halo") || msg.includes("hai") || msg.includes("assalamualaikum")){

        reply=`
        😊 <b>Wa'alaikumussalam.</b><br><br>

        Selamat datang di Chatbot PPDB SDIT Darul Huffadz.

        Ada yang bisa saya bantu?
        `;

    }

    else if(msg.includes("profil")){

        reply=`
        <b>🏫 Profil Sekolah</b><br><br>

        SDIT Darul Huffadz merupakan sekolah Islam terpadu yang berkomitmen mencetak generasi Qur'ani, berakhlak mulia, cerdas, dan berprestasi.
        `;

    }

    else if(msg.includes("visi")){

        reply=`
        <b>🎯 Visi & Misi</b><br><br>

        <b>Visi</b><br>

        Menjadi sekolah Islam unggulan yang menghasilkan generasi Qur'ani, cerdas, dan berakhlakul karimah.

        <br><br>

        <b>Misi</b>

        <br>• Menanamkan akhlak Islami

        <br>• Mengembangkan Tahfidz

        <br>• Mengembangkan prestasi akademik

        <br>• Membentuk karakter siswa

        `;

    }

    else if(msg.includes("program")){

        reply=`
        <b>⭐ Program Unggulan</b>

        <br><br>

        ✔ Tahfidz setiap hari

        <br>

        ✔ Tahsin & BTQ

        <br>

        ✔ IT Coding

        <br>

        ✔ Bahasa Inggris

        <br>

        ✔ LDKS

        <br>

        ✔ Pramuka

        <br>

        ✔ Praktik Lapangan

        `;

    }

    else if(msg.includes("fasilitas")){

        reply=`
        <b>🏢 Fasilitas</b>

        <br><br>

        • Ruang kelas AC

        <br>

        • Mushola

        <br>

        • UKS

        <br>

        • Perpustakaan

        <br>

        • Kantin

        <br>

        • Pojok Baca

        `;

    }

    else if(
    msg.includes("biaya") ||
    msg.includes("harga") ||
    msg.includes("uang") ||
    msg.includes("bayar")
){

    reply = `
    <b>💰 Informasi Biaya PPDB</b>

    <br><br>

    Silakan lihat rincian biaya PPDB melalui link Google Drive berikut:

    <br><br>

    <a href="https://drive.google.com/file/d/1oDzkS_ZhrVXLeTS6d-L7UO7M5YYCEx0d/view"
       target="_blank"
       style="
       color:#15803d;
       font-weight:bold;
       text-decoration:none;
       ">
       📄 Lihat Rincian Biaya PPDB
    </a>

    <br><br>

    Jika ada pertanyaan lebih lanjut silakan hubungi Admin PPDB 😊
    `;
}
    else if(msg.includes("jadwal")){

        reply=`
        <b>📅 Jadwal PPDB</b>

        <br><br>

        Gelombang II

        <br>

        Februari - April 2026

        `;

    }

    else if(msg.includes("daftar")){

        reply=`
        <b>📝 Cara Pendaftaran</b>

        <br><br>

        Silakan mengisi formulir PPDB melalui link yang telah disediakan oleh sekolah atau datang langsung ke kantor PPDB.
        `;

    }

    else if(msg.includes("kontak")){

        reply=`
        <b>📞 Kontak Admin</b>

        <br><br>

        0852-8596-0616

        <br>

        0877-2100-2669

        `;

    }

    else if(
    msg.includes("daftar") ||
    msg.includes("formulir")
){

    reply=`
    <b>📝 Formulir PPDB</b>

    <br><br>

    Silakan isi formulir pendaftaran melalui link berikut:

    <br><br>

    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdNVQjvmYhBVyRs5P5lg_3Qyy7-M8dSgjkJIeiTuszRZ0i2BQ/viewform"
       target="_blank">

       📋 Isi Formulir PPDB

    </a>

    <br><br>

    Setelah mengisi formulir, Admin akan menghubungi Anda.
    `;
}

    else{

        reply=`
        😅 Maaf, saya belum memahami pertanyaan tersebut.

        <br><br>

        Coba tanyakan mengenai:

        <br>

        • Profil

        <br>

        • Program

        <br>

        • Fasilitas

        <br>

        • Biaya

        <br>

        • Jadwal

        <br>

        • Cara Daftar

        `;

    }

    addMessage("bot",reply);

}