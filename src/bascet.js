const bascet = Vue.component('basket', {
    props: ['name'],
    template: `<div class="bascet">
    <h3 class="bascet-name1">{{name}}</h3>
    </div>`
})

export default { bascet: bascet };


