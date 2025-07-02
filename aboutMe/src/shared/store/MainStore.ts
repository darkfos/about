import {defineStore} from "pinia";


export const useMainStore = defineStore("mainStore", {
  state:  () => {
    return {
      activePage: "/"
    }
  },
  actions: {
    getPageLink() {
      return this.activePage;
    },

    addPagesLink(pageLink: string) {
      this.activePage = pageLink;
    }
  }
});
