import { Options, Vue } from 'vue-class-component';
import FormInput from '../components/FormInput.vue';

@Options({
    components: {
      FormInput,
    },
})
export class Form extends Vue {
    errors: any = {};

    validate(): void {};
    async onSubmit(): Promise<any> {}

    hasErrors(): boolean {
        return Object.keys(this.errors).length == 0;
    }

    validEmail(email: string): boolean {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
}