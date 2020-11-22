import { Vue } from 'vue-class-component';
import { useToast } from 'vue-toastification';

export class Toast extends Vue {
  toast = useToast();
}