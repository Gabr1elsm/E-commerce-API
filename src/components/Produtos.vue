<template>
  <div>
    <table border="1">
      <tbody>
        <tr v-for="produto in result.products" :key="produto.id">
          <td>{{ produto.title }}</td>
          <td>{{ produto.price }}</td>
          <td>{{ produto.category }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const result = ref({ products: [] })

    axios.get('https://dummyjson.com/products')
      .then(response => result.value = response.data)

    return { result }
  }
}
</script>