import {defineStore} from "pinia";


export const useMainStore = defineStore("mainStore", {
  state:  () => {
    return {
      pageLinks: [
        {
          href: "",
          title: ""
        }
      ]
    }
  },
  actions: {
    getPageLinks() {
      return this.pageLink;
    },

    addPagesLink(links: Array<{href: string, title: string}>) {
      this.pageLinks.push(...links);
    }
  }
});
