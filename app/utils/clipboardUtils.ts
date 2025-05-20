export async function copyToClipboard(text: string) {
    try {
        await navigator.clipboard.writeText(text);
        console.log("Copied to clipboard!");
        // You can also show a UI notification here
    } catch (err) {
        console.error("Failed to copy!", err);
    }
}
