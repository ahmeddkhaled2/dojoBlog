const app = Vue.createApp({
    //el create app deh btakhod el data ely hna w btzhrha ezay fl dom
    data(){
        return{
            showBooks: true,
            show: true,
            url: "https://hambolaelola.com",
            title: "Hbayebna dh awl tutorial view",
            author: "Ane el author",
            age: 21,
            books: [
                {title: "Book1", Author: "Author1", Description: "Awl ktab ykhwatyy" , img: 'assets/images.jpg', isSpecial: true},
                {title: "Book2", Author: "Author2", Description: "Tany ktab ykhwaty", img: 'assets/images.jpg', isSpecial: false},
                {title: "Book3", Author: "Author3", Description: "Talt ktab ykhwaty", img: 'assets/images.jpg', isSpecial: true},
            ],
        }
    },

    // how this accesses title.
    methods: {
        changeTitle(titles) {this.title = titles},
        toggleBooks(){
            this.showBooks = !this.showBooks;
        },
        toggle(book){
            book.isSpecial = !book.isSpecial;
        },
        handleEvent(e){
            console.log(e,e.type);
        }
    },

    computed: {
        filteredBooks (){
            return this.books.filter( (book)=> book.isSpecial);
        }
    }
})

app.mount('#app')