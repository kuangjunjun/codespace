import { defineStore } from "pinia";

export const useSideBarStore = defineStore('sidebar',
    () => {
        return {
            collapse: false, 
            handleCollapse() {
                this.collapse = !this.collapse
            }
        }
})