export function dynamicUrl(path: string) {
    return new URL(path, import.meta.url);
}