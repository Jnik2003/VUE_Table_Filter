<template>
  <div class="home">
    <h3>Всего записей: {{ totalEntries }}</h3>
    <div class="inputs">
      <my-select
        :options="column"
        :labelName="sortValueName"
        v-model="sortValue"
      />
      <my-select
        :options="term"
        v-model="termValue"
        :labelName="termName"
        :sortValue="sortValue"
      />
      <div class="inp">
        <label>Поисковая строка</label>
        <input
          :type="
            sortValue == 'date'
              ? 'date'
              : sortValue == 'description'
              ? 'text'
              : 'number'
          "
          v-if="sortValue != 'date'"
          v-model="searchValue"
          :disabled="termValue == ''"
        />
        <input type="date" v-else v-model="searchDate" @input="setDateValue" />
      </div>

      <my-select v-model="limit" :options="limitData" :labelName="limitName" />
    </div>

    <table border="1" width="100%" style="border-collapse: collapse">
      <tr>
        <th>N</th>
        <th>Дата</th>
        <th>Название</th>
        <th>Количество</th>
        <th>Расстояние</th>
      </tr>

      <tr v-for="data in calcDataTable" :key="data.id">
        <td>{{ data.id }}</td>
        <td>{{ data.date }}</td>
        <td>{{ data.description }}</td>
        <td>{{ data.count }}</td>
        <td>{{ data.distance }}</td>
      </tr>
    </table>
    <div class="pages">
      <div
        class="page"
        v-for="(pageNumber, idx) in calcTotalPages"
        :key="idx"
        :class="{ active: page === pageNumber }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
  </div>
</template>

<script>
//import dataFromJson from "@/core/data.json"; // локальный объект для разработки
import MySelect from "@/components/UI/MySelect.vue";
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      dataTable: [],
      dataFromJson: [],
      //---------
      column: [
        { value: "date", name: "Дата" },
        { value: "description", name: "Название" },
        { value: "count", name: "Количество" },
        { value: "distance", name: "Расстояние" },
      ],
      sortValue: "",
      sortValueName: "Выберите колонку",
      //----------
      term: [
        { value: "same", name: "Равно" },
        { value: "more", name: "Больше" },
        { value: "less", name: "Меньше" },
        { value: "contains", name: "Содержит" },
      ],
      termValue: "",
      termName: "Выберите условие",
      //--------
      limitData: [
        { value: "3", name: "3" },
        { value: "5", name: "5" },
        { value: "10", name: "10" },
      ],
      limit: "5", // кол-во постов на одной странице
      limitName: "Кол-во на стр.",
      //----------
      searchValue: "",
      // searchDate: new Date().toISOString().slice(0, 10),
      searchDate: "",
      //-------
      page: 1, // номер страницы для пагинации
      totalPages: 0, //подсчет для пагинации
      totalEntries: 0,
    };
  },
  components: {
    MySelect,
  },
  methods: {
    changePage(value) {
      this.page = value;
    },
    setDateValue() {
      this.sortValue == "date"
        ? (this.searchValue = this.searchDate)
        : (this.searchValue = "");
    },
    async getDataFromDb() {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        this.dataTable = response.data
        this.totalEntries = this.dataTable.length
        this.dataFromJson = this.dataTable
      } catch (error) {
        console.log("err");
      }
    },
  },
  computed: {
    calcTotalPages() {
      this.page = 1;
      return (this.totalPages = Math.ceil(this.totalEntries / this.limit));
    },
    calcDataTable() {
      // фильтр и кол-во записей на странице
      if (this.searchValue != "") {
        this.dataTable = this.dataFromJson.filter((item) => {
          //return item.distance > this.searchValue; // условия для фильтра
          if (this.termValue == "same") {
            return item[this.sortValue] == this.searchValue;
          } else if (this.termValue == "more") {
            return item[this.sortValue] > this.searchValue;
          } else if (this.termValue == "less") {
            return item[this.sortValue] < this.searchValue;
          } else if (
            this.termValue == "contains" &&
            this.sortValue == "description"
          ) {
            return item[this.sortValue]
              .toUpperCase()
              .includes(this.searchValue.toUpperCase());
          } else if (this.termValue == "contains") {
            return item[this.sortValue]
              .toString()
              .includes(this.searchValue.toString());
          }
        });
      } else {
        this.dataTable = this.dataFromJson.filter((item) => {
          return item;
        });
      }
      this.totalEntries = this.dataTable.length;
      this.totalPages = Math.ceil(this.totalEntries / this.limit);

      return (this.dataTable = this.dataTable.slice(
        (this.page - 1) * this.limit,
        this.limit * this.page
      ));
    },
  },

  mounted() {
    this.getDataFromDb();
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
.pages {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
}
.page {
  padding: 7px;
  border: 1px solid black;
  cursor: pointer;
}
.active {
  border: 1px solid red;
}
.inputs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.inp {
  display: flex;
  flex-direction: column;
}
</style>
