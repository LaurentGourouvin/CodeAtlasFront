import { watch } from "vue";

export function useScrollMenuLock(isLocked: () => boolean) {
    watch(isLocked, (locked) => {
        document.body.style.overflow = locked ? 'hidden' : '';
    }, { immediate: true })
}