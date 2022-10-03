<template>
  <div>
    <form>
      <label for="col-select">{{}}</label>
      <select name="city" id="col-select" @change="selectColumn">
        <option value="" disabled selected>-- Выберите колонку --</option>
        <option
        :value="col.value"
        v-for="col, idx in column" :key="idx"
        
        >
        {{col.name}}
    </option>
       
      </select>
    </form>
  </div>
</template>

<script>
export default {
  name: "MyColumnSelect",
  props: {
    column: {
      type: Array,
    },
    sortValue:{
        type: String,
    }
  },
  methods:{
    selectColumn(e){
        this.$emit('valueForSort', e.target.value)
    }
  },
};
</script>

<style lang="scss" scoped></style>
