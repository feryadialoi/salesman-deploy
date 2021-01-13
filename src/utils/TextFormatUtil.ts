export class TextFormatUtil {
    public rupiah(value: string | number): string {
        const separator = ".";
        const currency = "Rp";
        const newValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

        return `${currency}${newValue}`;
    }
}

export const useTextFormatUtil = () => {
    return new TextFormatUtil();
};
