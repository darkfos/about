<script setup lang="ts">
  import {onBeforeUnmount, onMounted, ref} from 'vue';
  import {useRoute, useRouter} from "vue-router";

  import {useMainStore} from "@/shared/store";

  const anchorLink = ref();
  const route = useRoute();
  const router = useRouter();

  const store = useMainStore();

  function selectedAnchorLink(keyLink: string) {
    router.push(route.path +"#"+keyLink);
  }

  function onAnchorClick(e: MouseEvent) {
    e.preventDefault();
  }

  onMounted(() => {
    document.addEventListener("click", onAnchorClick, true);
  });

  onBeforeUnmount(() => {
    document.removeEventListener("click", onAnchorClick, true);
  });

</script>

<template>
  <a-anchor
    :affix="true"
    :items="[
      ...store.pageLinks.map((elementLink, index: number) => {
        return {
          key: index.toString(),
          href: '#' + elementLink.href,
          title: elementLink.title
        }
      })
    ]"
    @change="selectedAnchorLink"
    v-model:items="anchorLink"
    class="anchor"
  />
</template>

<style>

  .ant-anchor-wrapper {
    padding-top: 120px;
    height: 100vh !important;
    border-right: 1px solid rgb(54, 54, 54);
  }

  .ant-anchor {
    position: sticky !important;
  }

  .ant-anchor-link-title {
    font-size: 16px !important;
    color: var(--main-text-color) !important;
  }
</style>
