<template>
  <div>
    <form>
      <label for="sort-select">{{labelName}}</label>
      <select
        name="select"
        id="sort-select"
        v-model="modelValue"
        @change="changeOption"
        :disabled="sortValue == ''"
      >
        <option value="" disabled selected>-- Выбор --</option>
        <option
          :value="item.value"
          v-for="(item, idx) in options"
          :key="idx"
          ref="opt"
        >
          {{ item.name }}
        </option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  name: "MySelect",
  
  props: {
    options: {
      type: Array,
    },   
    modelValue: {
      type: String,
    },
    labelName:{
      type: String,
    },
   sortValue: {
    type: String,
    
   }
  },
  methods: {
    changeOption(e) {      
      this.$emit("update:modelValue", e.target.value);
    },
  },
  computed: {},  
};
</script>

<style lang="scss" scoped>
  form{
    display: flex;
    flex-direction: column;
  }
</style>
