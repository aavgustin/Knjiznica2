<template>
  <q-page padding>
    <q-toolbar>
      <q-toolbar-title>Pretraži knjige</q-toolbar-title>
    </q-toolbar>
    
    <div class="q-mb-md">
      <q-input
        v-model="searchQuery"
        label="Unesite pojam za pretragu"
        outlined
        debounce="300"
        class="q-mb-md"
      />

      <div class="q-mb-md">
        <q-checkbox
          v-model="searchByAuthor"
          label="Pretražuj po autoru"
          color="primary"
        />
        <q-checkbox
          v-model="searchByTitle"
          label="Pretražuj po naslovu"
          color="primary"
        />
      </div>

      <q-btn @click="searchBooks" label="Traži" color="primary" />
    </div>

    <div class="text-h3 text-weight-bolder text-center q-mb-md">Popis Knjiga</div>
    
    <table border="1" cellpadding="10" cellspacing="0" class="q-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Naslov</th>
          <th>Autor</th>
          <th>Opis</th>
          <th>Slika</th>
          <th>Stanje</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in filteredBooks" :key="book.id">
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.description }}</td>
          <td><img :src="book.image" alt="Book Image" width="100"></td>
          <td>{{ book.stock }}</td>
        </tr>
      </tbody>
    </table>
    
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      searchByAuthor: false,
      searchByTitle: true,
      
      books: [
        { id: 1, title: 'GOTH', author: 'Otsuichi', description: 'Japanese Murder Mystery', image: '', stock: 3 },
        { id: 2, title: 'Pinokijeve avanture', author: 'Carlo Collodi', description: 'Drveni decko postaje pravi', image: '', stock: 6 },
        { id: 3, title: 'Bijeli klaun', author: 'Damir Miloš', description: 'Mali klaun uci o emocijama', image: 'https://www.knjigolov.hr/slike/slika649.png', stock: 8 },
      ],

      filteredBooks: [],
    };
  },

  methods: {
    searchBooks() {
      if (!this.searchQuery) {
        this.filteredBooks = this.books;
        return;
      }
      
      this.filteredBooks = this.books.filter(book => {
        let matches = false;

        if (this.searchByTitle && book.title.toLowerCase().includes(this.searchQuery.toLowerCase())) {
          matches = true;
        }
        if (this.searchByAuthor && book.author.toLowerCase().includes(this.searchQuery.toLowerCase())) {
          matches = true;
        }

        return matches;
      });
    },
  },

  mounted() {
    this.filteredBooks = this.books;
  },
};
</script>
