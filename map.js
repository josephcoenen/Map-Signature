document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize the Map centered on Munich
    const map = L.map('map', {
        zoomControl: false 
    }).setView([48.1371, 11.5761], 13);

    // 2. Add Light Monochrome Theme (CartoDB Positron)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    L.control.zoom({
        position: 'topright'
    }).addTo(map);

    // 3. Data (Locations)
    const locations = [
        {
            name: "VollCorner Bio-Markt",
            address: "Franz-Nißl-Str. 41, 80999 München",
            lat: 48.1913074,
            lng: 11.4628469,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "VollCorner Bio-Markt",
            address: "Warthestraße 1, 81927 München",
            lat: 48.1459842,
            lng: 11.6375901,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "VollCorner Bio-Markt",
            address: "Tegernseer Landstraße 41, 81541 München",
            lat: 48.1200062,
            lng: 11.5845454,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "VollCorner Bio-Markt",
            address: "Würmtalstr. 95, 81375 München",
            lat: 48.1147175,
            lng: 11.4812529,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "VollCorner Bio-Markt",
            address: "Innere Wiener Straße 52, 81667 München",
            lat: 48.1342435,
            lng: 11.5972525,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "VollCorner Bio-Markt",
            address: "Weißenburger Straße 5, 81667 München",
            lat: 48.1287427,
            lng: 11.5949869,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "VollCorner Bio-Markt",
            address: "Türkenstr. 27, 80799 München",
            lat: 48.1489434,
            lng: 11.5749067,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "VollCorner Bio-Markt",
            address: "Arnulfstraße 134, 80634 München",
            lat: 48.1466342,
            lng: 11.5344009,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "VollCorner Bio-Markt",
            address: "Schwanthalerstraße 111, 80339 München",
            lat: 48.1370723,
            lng: 11.5482275,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "VollCorner Bio-Markt",
            address: "Augustenstr. 55, 80333 München",
            lat: 48.1493892,
            lng: 11.5629019,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "VollCorner Bio-Markt",
            address: "Lindwurmstr. 80, 80337 München",
            lat: 48.1258673,
            lng: 11.5504313,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "VollCorner Bio-Markt",
            address: "Kazmairstr. 26, 80339 München",
            lat: 48.1347954,
            lng: 11.541898,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "VollCorner Bio-Markt",
            address: "Dom-Pedro-Str. 9b, 80637 München",
            lat: 48.1594836,
            lng: 11.5441938,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "VollCorner Bio-Markt",
            address: "Nederlinger Str. 72, 80638 München",
            lat: 48.1666438,
            lng: 11.5179302,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "VollCorner Bio-Markt",
            address: "Wolfratshauser Str. 204, 81479 München",
            lat: 48.0816569,
            lng: 11.5289891,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "VollCorner Bio-Markt",
            address: "Planegger Str. 9, 81241 München",
            lat: 48.145699,
            lng: 11.45918,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        // Alnatura
        {
            name: "Alnatura Super Natur Markt",
            address: "Landsberger Straße 480, 81241 München",
            lat: 48.1465794,
            lng: 11.4642813,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "Alnatura Super Natur Markt",
            address: "Lindwurmstraße 117, 80337 München",
            lat: 48.1276858,
            lng: 11.5548577,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "Alnatura Super Natur Markt",
            address: "Friedenheimer Brücke 23, 80639 München",
            lat: 48.1458458,
            lng: 11.5195283,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "Alnatura Super Natur Markt",
            address: "Nymphenburger Str. 158, 80634 München",
            lat: 48.1527807,
            lng: 11.5345053,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "Alnatura Super Natur Markt",
            address: "Sonnenstraße 23, 80331 München",
            lat: 48.1356611,
            lng: 11.5655756,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "Alnatura Super Natur Markt",
            address: "Leopoldstraße 64, 80802 München",
            lat: 48.159787,
            lng: 11.5859874,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "Alnatura Super Natur Markt",
            address: "Münchner Freiheit 7, 80802 München",
            lat: 48.1622559,
            lng: 11.586757,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "Alnatura Super Natur Markt",
            address: "Ingolstädter Straße 172, 80939 München",
            lat: 48.2044164,
            lng: 11.5886607,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "Alnatura Super Natur Markt",
            address: "Boschetsrieder Straße 72, 81379 München",
            lat: 48.099992,
            lng: 11.5277295,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "Alnatura Super Natur Markt",
            address: "Albert-Schweitzer-Straße 78, 81735 München",
            lat: 48.1063475,
            lng: 11.6452598,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "Alnatura Super Natur Markt",
            address: "Weißenburger Straße 20, 81667 München",
            lat: 48.1283353,
            lng: 11.5977704,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        // Denns
        {
            name: "Denns BioMarkt",
            address: "Kreillerstraße 211, 81825 München",
            lat: 48.1226492,
            lng: 11.6618542,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "Denns BioMarkt",
            address: "Humboldtstraße 23, 81543 München",
            lat: 48.119959,
            lng: 11.5745014,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "Denns BioMarkt",
            address: "Feilitzschstraße 7, 80802 München",
            lat: 48.161714,
            lng: 11.5878918,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "Denns BioMarkt",
            address: "Seidlstraße 5, 80335 München",
            lat: 48.1432906,
            lng: 11.5563984,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "Denns BioMarkt",
            address: "Hohenzollernstraße 3, 80801 München",
            lat: 48.1593869,
            lng: 11.5843593,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        {
            name: "Denns BioMarkt",
            address: "Lerchenfeldstraße 10, 80538 München",
            lat: 48.1466333,
            lng: 11.59347,
            mainCat: "dauerhaft",
            hours: "Mo-Sa: 08:00 - 20:00",
            info: "supermarkt",
            subCat: "Läden"
        },
        // Coffee Shops
        {
            name: "LAP Coffee",
            address: "Bayerstraße 10a, München",
            lat: 48.1408451,
            lng: 11.5611753,
            mainCat: "dauerhaft",
            hours: "Mo-Fr: 07:30 - 19:00, Sa-So: 08:30 - 19:00",
            info: "coffee",
            subCat: "Cafés"
        },
        {
            name: "LAP Coffee",
            address: "Barer Straße 54, München",
            lat: 48.1498768,
            lng: 11.5729149,
            mainCat: "dauerhaft",
            hours: "Mo-Fr: 08:00 - 18:00, Sa-So: 09:00 - 18:00",
            info: "coffee",
            subCat: "Cafés"
        },
        {
            name: "LAP Coffee",
            address: "Hohenzollernstr. 8, München",
            lat: 48.1595188,
            lng: 11.5845431,
            mainCat: "dauerhaft",
            hours: "Mo-Fr: 08:30 - 17:30, Sa-So: 09:00 - 18:00",
            info: "coffee",
            subCat: "Cafés"
        },
        {
            name: "LAP Coffee",
            address: "Occamstraße 1, München",
            lat: 48.1615222,
            lng: 11.5891696,
            mainCat: "dauerhaft",
            hours: "Mo-Fr: 08:30 - 18:00, Sa-So: 09:00 - 18:30",
            info: "coffee",
            subCat: "Cafés"
        },
        {
            name: "LAP Coffee",
            address: "Pariser Straße 33, München",
            lat: 48.1288305,
            lng: 11.6005102,
            mainCat: "dauerhaft",
            hours: "Mo-Fr: 08:00 - 18:00, Sa-So: 09:00 - 18:00",
            info: "coffee",
            subCat: "Cafés"
        },
        {
            name: "LAP Coffee",
            address: "Westenriederstr. 21, München",
            lat: 48.1350982,
            lng: 11.5782578,
            mainCat: "dauerhaft",
            hours: "Mo-Fr: 08:30 - 17:30, Sa-So: 09:30 - 17:30",
            info: "coffee",
            subCat: "Cafés"
        },
        {
            name: "LAP Coffee",
            address: "Fraunhoferstr. 41, München",
            lat: 48.1286147,
            lng: 11.5758052,
            mainCat: "dauerhaft",
            hours: "Mo-Fr: 08:30 - 18:00, Sa-So: 09:30 - 18:00",
            info: "coffee",
            subCat: "Cafés"
        },
        {
            name: "LAP Coffee",
            address: "Klenzestraße 49, München",
            lat: 48.1301031,
            lng: 11.5737432,
            mainCat: "dauerhaft",
            hours: "Mo-Fr: 08:00 - 18:30, Sa-So: 08:30 - 18:30",
            info: "coffee",
            subCat: "Cafés"
        },
        {
            name: "Plex Coffee",
            address: "Türkenstraße 67, 80799 München",
            lat: 48.1515182,
            lng: 11.5764645,
            mainCat: "dauerhaft",
            hours: "Mo-So: 08:00 - 18:00",
            info: "coffee",
            subCat: "Cafés"
        },
        {
            name: "Plex Coffee",
            address: "Fraunhoferstraße 21, 80469 München",
            lat: 48.12979,
            lng: 11.5737897,
            mainCat: "dauerhaft",
            hours: "Mo-So: 08:00 - 18:00",
            info: "coffee",
            subCat: "Cafés"
        },
        {
            name: "Plex Coffee",
            address: "Leopoldstraße 68, 80802 München",
            lat: 48.1599651,
            lng: 11.5860738,
            mainCat: "dauerhaft",
            hours: "Mo-So: 08:00 - 18:00",
            info: "coffee",
            subCat: "Cafés"
        },
        {
            name: "Plex Coffee",
            address: "Sendlinger Tor Platz 11, 80336 München",
            lat: 48.1340175,
            lng: 11.566994,
            mainCat: "dauerhaft",
            hours: "Mo-So: 08:00 - 18:00",
            info: "coffee",
            subCat: "Cafés"
        },
        // Starter Events (Hardcoded as fallback if CSV fetch fails due to CORS)
        {
            name: "Testevent (BaumEntscheid Info)",
            address: "Hohenzollernplatz, 80796 München",
            lat: 48.1611099,
            lng: 11.5674064,
            mainCat: "events",
            hours: "15:00 - 19:00",
            info: "Event heute"
        }
    ];

    const markers = [];
    const locationList = document.getElementById('location-list');
    const subFilterRow = document.getElementById('sub-filters');
    const subChipContainer = subFilterRow.querySelector('.sub-chips');


    // 4. Function to Render Markers and List
    function renderLocations(mainFilter = 'all', subFilter = 'all') {
        markers.forEach(m => map.removeLayer(m));
        markers.length = 0;
        locationList.innerHTML = '';

        const filtered = locations.filter(loc => {
            const matchMain = mainFilter === 'all' || loc.mainCat === mainFilter;
            const matchSub = subFilter === 'all' || loc.subCat === subFilter;
            return matchMain && matchSub;
        });

        filtered.forEach(loc => {
            let color = "#CCFF00"; // Light Green for Sammelstationen
            if(loc.mainCat === 'heute') color = "#006400"; // Dark Green for Mobile Stände
            if(loc.mainCat === 'events') color = "#006400"; // Moved to Dark Green as per request

            let marker;
            if (loc.mainCat === 'dauerhaft' || loc.mainCat === 'events') {
                let iconUrl = '';
                if(loc.info === 'supermarkt') iconUrl = 'assets/shoppingcart.png';
                if(loc.info === 'coffee') iconUrl = 'assets/coffee.png';
                if(loc.mainCat === 'events') iconUrl = 'assets/events.png';

                const stationIcon = L.divIcon({
                    html: `<div class="station-marker-container">
                             <div class="station-bg" style="background:${color}; ${loc.mainCat === 'events' ? 'border-width: 5px;' : ''}"></div>
                             ${iconUrl ? `<div class="station-icon" style="background-image: url('${iconUrl}')"></div>` : '<div class="station-icon">📍</div>'}
                           </div>`,
                    className: '',
                    iconSize: [28, 28],
                    iconAnchor: [14, 14]
                });
                marker = L.marker([loc.lat, loc.lng], { icon: stationIcon }).addTo(map);
            } else {
                marker = L.circleMarker([loc.lat, loc.lng], {
                    radius: 11.5,
                    fillColor: color,
                    color: "#FFFFFF",
                    weight: 3,
                    opacity: 1,
                    fillOpacity: 0.9
                }).addTo(map);
            }

            const isSammelstation = loc.mainCat === 'dauerhaft';
            const popupHeader = isSammelstation ? 'Unterschriftenstelle + Einwurfbox' : loc.name;
            const postBoxFlag = isSammelstation ? '📬 Postbox + Unterschriftenzettel vorhanden' : '';
            const gmapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`;
            const secondaryInfo = isSammelstation ? '<p style="margin-top:5px; color:#003333; font-style:italic;">Im Eingangsbereich neben den Kassen</p>' : `<p style="margin-top:5px; color:#003333; font-style:italic;">"${loc.info}"</p>`;

            marker.bindPopup(`
                <div class="popup-content">
                    <h3>${isSammelstation ? loc.name : popupHeader}</h3>
                    <div class="popup-info">
                        <p><strong>${loc.address}</strong></p>
                        <p>${loc.hours}</p>
                        ${secondaryInfo}
                        <p style="margin-top:5px; font-weight:700;">${postBoxFlag}</p>
                    </div>
                    <a href="${gmapsUrl}" class="btn-route" target="_blank">Routenplanung (Google Maps)</a>
                </div>
            `);

            markers.push(marker);

            const card = document.createElement('div');
            card.className = 'location-card';
            
            // Map internal names to display names for tags
            const catDisplay = {
                'dauerhaft': 'Sammelstationen',
                'heute': 'Mobiler Stand',
                'events': 'Event'
            };

            card.innerHTML = `
                <h3>${loc.name}</h3>
                <p>${loc.address}</p>
                <div class="tag-row">
                    <span class="location-tag" style="background:${color}; color:${loc.mainCat === 'dauerhaft'?'#003333':'#FFFFFF'}">${catDisplay[loc.mainCat]}</span>
                    ${loc.subCat ? `<span class="location-tag">${loc.subCat}</span>` : ''}
                    ${isSammelstation ? '<span>📬</span>' : ''}
                </div>
            `;

            card.addEventListener('click', () => {
                map.setView([loc.lat, loc.lng], 16);
                marker.openPopup();
            });

            locationList.appendChild(card);
        });
    }

    // 5. Hierarchical Filter Logic
    let currentMain = 'all';
    let currentSub = 'all';

    const mainBtns = document.querySelectorAll('.cat-btn');
    mainBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            mainBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentMain = btn.dataset.main;
            currentSub = 'all';
            
            updateSubFilters(currentMain);
            renderLocations(currentMain, currentSub);
        });
    });

    function updateSubFilters(main) {
        subChipContainer.innerHTML = '';
        
        if (main === 'dauerhaft') {
            subFilterRow.classList.remove('hidden');
            const subs = ['all', 'Läden', 'Cafés'];
            subs.forEach(s => {
                const chip = document.createElement('span');
                chip.className = `sub-chip ${s === 'all' ? 'active' : ''}`;
                chip.textContent = s === 'all' ? 'Alle anzeigen' : s;
                chip.addEventListener('click', () => {
                    subChipContainer.querySelectorAll('.sub-chip').forEach(c => c.classList.remove('active'));
                    chip.classList.add('active');
                    currentSub = s;
                    renderLocations(currentMain, currentSub);
                });
                subChipContainer.appendChild(chip);
            });
        } else {
            subFilterRow.classList.add('hidden');
        }
    }

    // 6. Find Nearest Logic
    const findBtn = document.getElementById('find-nearest');
    findBtn.addEventListener('click', async () => {
        const address = document.getElementById('address-search').value;
        if (!address) return alert("Bitte Adresse eingeben");

        try {
            const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address + ", München")}`);
            const data = await res.json();
            if (data.length > 0) {
                const userLat = parseFloat(data[0].lat);
                const userLon = parseFloat(data[0].lon);

                let nearest = null;
                let minDist = Infinity;
                locations.forEach(loc => {
                    const d = Math.sqrt(Math.pow(loc.lat - userLat, 2) + Math.pow(loc.lng - userLon, 2));
                    if (d < minDist) {
                        minDist = d;
                        nearest = loc;
                    }
                });

                if (nearest) {
                    map.setView([nearest.lat, nearest.lng], 15);
                    const marker = markers.find(m => m.getLatLng().lat === nearest.lat);
                    if(marker) marker.openPopup();
                }
            } else {
                alert("Adresse nicht gefunden");
            }
        } catch (e) {
            alert("Fehler bei der Suche");
        }
    });

    // 7. CSV Event Integration
    async function fetchEvents() {
        const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQpBP6cV-FLptZgVYkmAbIz7ZisvQu9ZA_uBikl0aW4af6MgusIu0QVcLnO38GbBAIFRCinuJt3CYec/pub?gid=625378895&single=true&output=csv";
        
        // Update date pill text immediately
        const datePill = document.getElementById('current-date-pill'); 
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const todayStrDE = new Date().toLocaleDateString('de-DE', options);
        if (datePill) {
            datePill.innerHTML = `An diesen Orten findest du uns\nheute am ${todayStrDE}`;
        }

        console.log("Starting event fetch...");
        // Render static locations immediately
        renderLocations(currentMain, currentSub);

        try {
            const res = await fetch(url);
            const csv = await res.text();
            
            const lines = csv.split('\n');
            const today = new Date();
            const todayStr = today.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });

            for (let i = 1; i < lines.length; i++) {
                if (!lines[i].trim()) continue;
                
                // Robust CSV parsing
                const parts = [];
                let current = '';
                let inQuotes = false;
                for (let char of lines[i]) {
                    if (char === '"') {
                        inQuotes = !inQuotes;
                    } else if (char === ',' && !inQuotes) {
                        parts.push(current.trim());
                        current = '';
                    } else {
                        current += char;
                    }
                }
                parts.push(current.trim());

                if (parts.length < 8) continue;
                
                const date = parts[0].replace(/"/g, '');
                const name = parts[2].replace(/"/g, '');
                const street = parts[3].replace(/"/g, '');
                const zip = parts[4].replace(/"/g, '');
                const city = parts[5].replace(/"/g, '').replace('Mnchen', 'München');
                const start = parts[6].replace(/"/g, '');
                const end = parts[7].replace(/"/g, '');

                const fullAddress = `${street}, ${zip} ${city}`;

                if (date === todayStr) {
                    // Avoid duplicating the hardcoded test event if it exists in CSV
                    if (locations.some(loc => loc.name.includes(name) && loc.mainCat === 'events')) continue;

                    // Geocode this event
                    const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(fullAddress)}`);
                    const geoData = await geoRes.json();
                    if (geoData.length > 0) {
                        locations.push({
                            name: name,
                            address: fullAddress,
                            lat: parseFloat(geoData[0].lat),
                            lng: parseFloat(geoData[0].lon),
                            mainCat: "events",
                            hours: `${start} - ${end}`,
                            info: "Event heute"
                        });
                    }
                }
            }
            // Re-render after fetching events
            renderLocations(currentMain, currentSub);
        } catch (e) {
            console.error("CORS / Network Error: Fetching events from Google Sheets failed.", e);
            console.warn("TIP: To enable dynamic events from CSV, you MUST run this project via a local server (e.g. 'python3 -m http.server' or 'npx serve') instead of opening the file directly.");
        }
    }

    // Initial Render
    fetchEvents();
});
