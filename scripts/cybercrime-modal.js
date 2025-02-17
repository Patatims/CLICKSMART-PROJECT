document.addEventListener("DOMContentLoaded", function () {
    const guideWrappers = document.querySelectorAll(".guide-wrapper");
    const modal = document.getElementById("cybercrime-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalGrid = document.getElementById("modal-grid");
    const secondModal = document.getElementById("cybercrime-second-modal");

    // All Cybercrime Categories and Their Sub-Crimes
    const cybercrimeData = {
        personal: {
            title: "Personal Cybercrimes",
            description: "Personal cybercrime refers to digital crimes that directly target individuals, affecting their finances, personal security, privacy, or reputation. These crimes often involve identity theft, scams, financial fraud, harassment, hacking, and data breaches that impact an individual rather than a business or government entity.",
            crimes: [
                { type: "scams-online-fraud", name: "Scams & Online Fraud" },
                { type: "financial-fraud", name: "Financial Fraud" },
                { type: "identity-theft", name: "Identity Theft" },
                { type: "phishing-attacks", name: "Phishing Attacks" },
                { type: "ransomware-malware-attacks", name: "Ransomware & Malware" },
                { type: "hacking-unauthorized-account-access", name: "Hacking & Unauthorized Access" },
                { type: "cyberstalking-online-harassment", name: "Cyberstalking & Online Harassment" },
                { type: "sextortion-revenge-porn", name: "Sextortion & Revenge Porn" },
                { type: "online-shopping-fraud", name: "Online Shopping Fraud" },
                { type: "fake-social-media-profiles-catfishing", name: "Fake Social Media Profiles & Catfishing" },
                { type: "online-defamation-doxxing", name: "Online Defamation & Doxxing" },
                { type: "child-exploitation-grooming", name: "Child Exploitation & Grooming" }
            ],
        },
            government: {
                title: "Government & Critical Infrastructure Cybercrimes",
                description: "Government & Critical Infrastructure Cybercrimes target government systems, public services, and national security rather than individuals or businesses. These cybercrimes can have large-scale consequences, including data breaches, infrastructure disruptions, election interference, and cyber espionage.",
                crimes: [
                    { type: "cyberterrorism", name: "Cyberterrorism" },
                    { type: "cyberwarfare", name: "Cyberwarfare & Espionage" },
                    { type: "infrastructure-attacks", name: "Attacks on Critical Infrastructure" },
                    { type: "gov-hacking", name: "Hacking of Government Websites" },
                    { type: "election-fraud", name: "Election Cybercrime & Fake News" }
                ]
            },
            corporate: {
                title: "Corporate & Business Cybercrimes",
                description: "Corporate & Business Cybercrimes target companies, financial institutions, and industries, often leading to financial losses, data breaches, or business disruptions. Unlike personal cybercrimes, these attacks typically focus on stealing corporate secrets, extorting businesses, or damaging a company’s reputation.",
                crimes: [
                    { type: "bec-fraud", name: "Business Email Compromise (BEC)" },
                    { type: "corporate-espionage", name: "Corporate Espionage (Trade Secrets Theft)" },
                    { type: "ransomware-business", name: "Ransomware Attacks on Businesses" },
                    { type: "insider-threat", name: "Insider Threats & Employee Data Leaks" },
                    { type: "ddos-attacks", name: "Distributed Denial of Service (DDoS) Attacks" },
                    { type: "supply-chain", name: "Supply Chain Cyber Attacks" }
                ]
            },
            emerging: {
                title: "Emerging Cybercrime Threats",
                description: "As technology advances, cybercriminals develop new methods to exploit digital vulnerabilities. These emerging threats are not yet as common as traditional cybercrimes but are rapidly evolving and will likely become major risks in the future.",
                crimes: [
                    { type: "ai-cybercrime", name: "AI-Powered Cybercrime (Deepfakes & AI Phishing)" },
                    { type: "metaverse-crime", name: "Cybercrime in the Metaverse & Virtual Worlds" },
                    { type: "quantum-hacking", name: "Quantum Hacking (Breaking Encryption)" },
                    { type: "raas", name: "Ransomware-as-a-Service (RaaS)" },
                    { type: "iot-attacks", name: "Advanced IoT Cyber Attacks" }
                ]
            }
        };

    // First Modal (Cybercrime List)
    guideWrappers.forEach(wrapper => {
        wrapper.addEventListener("click", function () {
            const type = this.dataset.type;
            if (cybercrimeData[type]) {
                openFirstModal(cybercrimeData[type]);
            }
        });
    });

    function openFirstModal(data) {
        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;
        modalGrid.innerHTML = ""; // Clear previous items

        data.crimes.forEach(crime => {
            const card = document.createElement("div");
            card.classList.add("cybercrime-card");
            card.setAttribute("data-type", crime.type);
            card.innerHTML = `<h3>${crime.name}</h3>`;
            modalGrid.appendChild(card);
        });

        modal.classList.add("active");
        document.body.classList.add("modal-open");

        document.querySelectorAll(".cybercrime-card").forEach(card => {
            card.addEventListener("click", function () {
                openSecondModal(this.dataset.type);
            });
        });
    }

    //  Open Second Modal (Hardcoded Content)
    function openSecondModal(crimeType) {
        // Hide all cybercrime details
        document.querySelectorAll(".cybercrime-details").forEach(detail => {
            detail.style.display = "none";
        });

        // Show the selected cybercrime details
        const selectedCrime = document.getElementById(crimeType);
        if (selectedCrime) {
            selectedCrime.style.display = "block";
            secondModal.style.display = "flex";
        }

    }

    // Close Second Modal when clicking outside the content
    secondModal.addEventListener("click", function (event) {
        if (!event.target.closest(".modal-content")) {
            secondModal.style.display = "none";
        }
    });

    // Close First Modal when clicking outside the content
    modal.addEventListener("click", function (event) {
        if (!event.target.closest(".modal-content")) {
            modal.classList.remove("active");
            document.body.classList.remove("modal-open");
        }
    });
});
