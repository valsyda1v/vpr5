export default {
    props: {
        tour: {
            type: Object,
            required: true
        }
    },
    template: `
        <div class="card">
            <img :src="tour.img" :alt="tour.title">
            <h3>{{ tour.title }}</h3>
            <p class="destination">{{ tour.destination }}</p>
            <p class="price"><strong>{{ tour.price }} грн</strong></p>
            <button @click="$emit('select-tour', tour.id)" class="btn">Детальніше</button>
        </div>
    `
};