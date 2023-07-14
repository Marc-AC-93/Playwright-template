export class RandomData {
    private stringDateNow(): string {
        const formattedDateNow = new Date().toISOString()
            .replace(/-/g, '').replace(/T/g, '')
            .replace(/Z/g, '').replace(/:/g, '')
            .replace('.', '');
        return formattedDateNow.toString();
    }
    public randomEmail(worker: string): string {
        return `xxx-${worker}-${this.stringDateNow()}@gmail.com`;
    }
}