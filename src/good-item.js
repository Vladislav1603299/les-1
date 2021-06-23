const goodItem = Vue.component("goods-item", {
    props: ["goodProp"],
    methods: {
        async addToCart() {
            const response = await fetch(`${API_URL}/addToCart`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(this.goodProp)
            });
        },
    },
    template: `
      <div class="goods-item" @click=addToCart>
        <h3>{{goodProp.product_name}}</h3>
        <p>{{goodProp.price}}</p>
      </div>
    `,
})

export default { goodItem: goodItem };