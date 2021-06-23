const search = Vue.component('search', {
    props: ['name'],
    template: `
    <button class="button-search" onclick="filterGoods()">{{name}}</button>
    `
})

export default { search: search };
