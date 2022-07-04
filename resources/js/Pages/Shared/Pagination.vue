<template>
  <!-- This example requires Tailwind CSS v2.0+ -->

  <nav
    aria-label="Page navigation example"
    class="mt-5 mb-4 flex items-center justify-center sm:px-0"
  >
    <ul class="inline-flex -space-x-px">
      <li>
        <Link
          v-if="data.prev_page_url"
          :href="data.prev_page_url"
          class="
            py-2
            px-3
            ml-0
            leading-tight
            text-gray-500
            bg-white
            rounded-l-lg
            border border-gray-300
            hover:bg-gray-100 hover:text-gray-700
            dark:bg-gray-800
            dark:border-gray-700
            dark:text-gray-400
            dark:hover:bg-gray-700
            dark:hover:text-white
          "
          >Anterior</Link
        >
      </li>

      <li v-for="link in cleanLinks" :key="link.id">
        <Link
          :href="link.url"
          class="
            py-2
            px-3
            leading-tight
            text-gray-500
            bg-white
            border border-gray-300
            hover:bg-gray-100 hover:text-gray-700
            dark:bg-gray-800
            dark:border-gray-700
            dark:text-gray-400
            dark:hover:bg-gray-700
            dark:hover:text-white
          "
          :class="{
            ' text-indigo-700 dark:text-indigo-700':
              link.active,
          }"
          >{{ link.label }}</Link
        >
      </li>

      <li>
        <Link
          v-if="data.next_page_url"
          :href="data.next_page_url"
          class="
            py-2
            px-3
            leading-tight
            text-gray-500
            bg-white
            rounded-r-lg
            border border-gray-300
            hover:bg-gray-100 hover:text-gray-700
            dark:bg-gray-800
            dark:border-gray-700
            dark:text-gray-400
            dark:hover:bg-gray-700
            dark:hover:text-white
          "
          >
          
          Próximo
          
          </Link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";

export default {
  name: "Pagination",
  components: {
    Link,
  },

  props: {
    data: Object,
  },
  computed: {
    cleanLinks() {
      const cleanLinks = [...this.data.links];
      cleanLinks.shift();
      cleanLinks.pop();
      return cleanLinks;
    },
  },
};
</script>