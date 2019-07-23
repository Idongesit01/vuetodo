var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      name: 'idongesit',
      food : 'afang',
      number1 :'',
      number2 :'',
      answer :'',
      items: [],
      item: '',
    },

    methods:{

        addItem(){
            this.items.push(this.item);
        },

        add(){
            this.answer = parseInt(this.number1) + parseInt(this.number2);
        }
    }
  })