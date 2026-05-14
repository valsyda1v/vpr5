const { createApp } = Vue;

const TourCard = {
    props: ['tour'],
    template: `
        <div class="card">
            <img :src="tour.img" :alt="tour.title" style="width:100%">
            <h3>{{ tour.title }}</h3>
            <p>{{ tour.destination }}</p>
            <p><strong>{{ tour.price }} грн</strong></p>
        </div>
    `
};

createApp({
    components: {
        'tour-card': TourCard
    },
    data() {
        return {
            title: 'Гарячі тури "Побач Світ"',
            tours: [
                { id: 1, title: "Шарм-ель-Шейх", destination: "Єгипет", price: 25000, img: "1.png" },
                { id: 2, title: "Анталія", destination: "Туреччина", price: 22000, img: "2.png" },
                { id: 3, title: "Париж", destination: "Франція", price: 35000, img: "3.png" },
                { id: 4, title: "Будва", destination: "Чорногорія", price: 18500, img: "4.png" },
                { id: 5, title: "Марса-Алам", destination: "Єгипет", price: 31000, img: "1.png" },
                { id: 6, title: "Стамбул", destination: "Туреччина", price: 16000, img: "2.png" }
            ],
            filters: {
                destination: 'all',
                maxPrice: 60000
            }
        }
    },
    computed: {
        filteredTours() {
            return this.tours.filter(tour => {
                const matchDest = this.filters.destination === 'all' || tour.destination === this.filters.destination;
                const matchPrice = tour.price <= this.filters.maxPrice;
                return matchDest && matchPrice;
            });
        },
        uniqueDestinations() {
            return [...new Set(this.tours.map(t => t.destination))];
        }
    }
}).mount('#app');