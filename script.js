const input = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");

// ENTER
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

// JAM
function getTime() {
    const now = new Date();

    return (
        now.getHours().toString().padStart(2, "0") +
        ":" +
        now.getMinutes().toString().padStart(2, "0")
    );
}

// TAMBAH PESAN
function addMessage(sender, message) {

    const wrapper = document.createElement("div");

    wrapper.className = sender;

    wrapper.innerHTML = `
        <div class="bubble">
            ${message}
        </div>

        <div class="time">
            ${getTime()}
        </div>
    `;

    chatBox.appendChild(wrapper);

    chatBox.scrollTop = chatBox.scrollHeight;
}

// KIRIM PESAN
function sendMessage() {

    const text = input.value.trim();

    if (!text) return;

    addMessage("user", text);

    input.value = "";

    showTyping(text);
}

// TYPING
function showTyping(message) {

    const typing = document.createElement("div");

    typing.className = "bot";

    typing.innerHTML = `
        <div class="bubble">
            ✍️ DuHa AI sedang mengetik...
        </div>
    `;

    chatBox.appendChild(typing);

    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {

        typing.remove();

        botReply(message);

    }, 1000);
}

// PENCARIAN KNOWLEDGE
function searchKnowledge(question) {

    const q = question.toLowerCase();

    let bestMatch = null;

    let highestScore = 0;

    knowledge.forEach(item => {

        let score = 0;

        item.keywords.forEach(keyword => {

            if (q.includes(keyword.toLowerCase())) {
                score += 10;
            }

        });

        const fullText =
            (item.title + " " + item.content).toLowerCase();

        q.split(" ").forEach(word => {

            if (
                word.length > 2 &&
                fullText.includes(word)
            ) {
                score++;
            }

        });

        if (score > highestScore) {

            highestScore = score;

            bestMatch = item;

        }

    });

    return bestMatch;
}

// BALASAN BOT
function botReply(message) {

    const msg = message.toLowerCase();

    // SALAM

    if (
        msg.includes("halo") ||
        msg.includes("hai") ||
        msg.includes("assalamualaikum")
    ) {

        addMessage(
            "bot",
            `
            😊 <b>Wa'alaikumussalam Warahmatullahi Wabarakatuh</b>

            <br><br>

            Selamat datang di layanan informasi PPDB
            <b>YAYASAN DARUL HUFFADZ</b>.

            `
        );

        return;
    }

    // CARI KNOWLEDGE

    const result = searchKnowledge(message);

    if (result) {

        addMessage(
            "bot",
            `
            <b>📚 ${result.title}</b>

            <br><br>

            ${result.content}
            `
        );

        return;
    }

    // JIKA TIDAK KETEMU

    addMessage(
        "bot",
        `
        😅 Maaf, saya belum menemukan informasi tersebut.

        <br><br>

        Coba tanyakan:

        <br>🏫 Profil Sekolah
        <br>⭐ Program Unggulan
        <br>🏢 Fasilitas
        <br>🎯 Ekstrakurikuler
        <br>💰 Biaya
        <br>📝 Syarat Pendaftaran
        <br>📋 Formulir
        <br>📞 Kontak Admin
        <br>📍 Alamat Sekolah
        `
    );
}
