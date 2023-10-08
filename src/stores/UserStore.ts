import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
    const name = ref("John Doe");
    const email = ref("johndoe@gmail.com");
    const role = ref("Administrator");

    function setName(value: string): void {
        name.value = value;
    }

    function setEmail(value: string): void {
        email.value = value;
    }

    function setRole(value: string): void {
        role.value = value;
    }

    function removeData(): void {
        name.value = "";
        email.value = "";
        role.value = "";
    }

    return { name, email ,setName, setEmail, setRole, removeData, role }
});