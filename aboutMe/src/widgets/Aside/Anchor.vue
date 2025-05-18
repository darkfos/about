<script setup lang="ts">
  import {defineProps, onBeforeUnmount, onMounted, ref} from 'vue';
  import {useRoute, useRouter} from "vue-router";

  const anchorLink = ref();
  const route = useRoute();
  const router = useRouter();

  const props: {
    anchorLink: Array<{
      href: string;
      title: string;
    }>
  } = defineProps(["anchorLink"]);

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
      ...props.anchorLink.map((elementLink, index: number) => {
        return {
          key: index.toString(),
          href: elementLink.href,
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
