
        // Resim Galerisi Fonksiyonları
        let currentSlide = 0;
        const slides = document.querySelectorAll('.gallery-slide');
        const slideCounter = document.querySelector('.slide-counter');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        
        function showSlide(index) {
            // Tüm slaytları gizle
            slides.forEach(slide => {
                slide.classList.remove('active');
            });
            
            // Sınır kontrolü
            if (index >= slides.length) currentSlide = 0;
            if (index < 0) currentSlide = slides.length - 1;
            
            // Aktif slaytı göster
            slides[currentSlide].classList.add('active');
            slideCounter.textContent = `${currentSlide + 1} / ${slides.length}`;
        }
        
        function nextSlide() {
            currentSlide++;
            showSlide(currentSlide);
        }
        
        function prevSlide() {
            currentSlide--;
            showSlide(currentSlide);
        }
        
        // Buton olayları
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        // Otomatik slayt geçişi
        setInterval(nextSlide, 5000);
        
        // Renk Seçimi
        const colorOptions = document.querySelectorAll('.color-option');
        const selectedColorElement = document.getElementById('selectedColor');
        let selectedColor = "Siyah";
        
        colorOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Tüm seçeneklerden seçili class'ını kaldır
                colorOptions.forEach(opt => opt.classList.remove('selected'));
                // Tıklanan seçeneği seçili yap
                this.classList.add('selected');
                selectedColor = this.getAttribute('data-color');
                selectedColorElement.textContent = selectedColor;
                
                // Detaylar panelini aç
                const detailsPanel = document.getElementById('detailsPanel');
                detailsPanel.classList.add('open');
            });
        });
        
        // Baskı Seçimi
        const printOptions = document.querySelectorAll('.print-option');
        const selectedPrintElement = document.getElementById('selectedPrint');
        let selectedPrint = "Yüksek Çözünürlüklü";
        
        printOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Tüm seçeneklerden seçili class'ını kaldır
                printOptions.forEach(opt => opt.classList.remove('selected'));
                // Tıklanan seçeneği seçili yap
                this.classList.add('selected');
                selectedPrint = this.getAttribute('data-print');
                selectedPrintElement.textContent = selectedPrint;
                
                // Detaylar panelini aç
                const detailsPanel = document.getElementById('detailsPanel');
                detailsPanel.classList.add('open');
            });
        });
        
        // Sipariş Tamamlama
        const completeOrderBtn = document.getElementById('completeOrder');
        
        completeOrderBtn.addEventListener('click', function() {
            // WhatsApp mesajını oluştur
            const phoneNumber = "905342401859";
            const message = `Merhaba, YAVEXO'dan sipariş vermek istiyorum.\nSeçilen Renk: ${selectedColor}\nSeçilen Baskı: ${selectedPrint}\n\nSipariş hakkında bilgi almak istiyorum.`;
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            // WhatsApp'ta aç
            window.open(whatsappURL, '_blank');
        });
// Renk seçme alanı için
const colorSelect = document.getElementById('colorSelect');
const selectedColorSpan = document.getElementById('selectedColor');

colorSelect.addEventListener('change', function() {
    selectedColorSpan.textContent = this.value;
});

// Sayfa yüklendiğinde seçili rengi göster
document.addEventListener('DOMContentLoaded', function() {
    selectedColorSpan.textContent = colorSelect.value;
});
    

