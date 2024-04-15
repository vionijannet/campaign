import { Observable } from "rxjs";
import { MD5 } from "crypto-js";
import * as CryptoJS from "crypto-js";
import { map } from "rxjs/operators";

export class TextFormatter {
    public static convertEmptyPropertyToNull(obj: any): any {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = obj[key];
                if (typeof value === 'string' && value === '') {
                    obj[key] = null;
                } else if (typeof value === 'object') {
                    TextFormatter.convertEmptyPropertyToNull(value);
                } else if (Array.isArray(value)) {
                    for (let i = 0; i < value.length; i++) {
                        if (typeof value[i] === 'object') {
                            TextFormatter.convertEmptyPropertyToNull(value[i]);
                        }
                    }
                }
            }
        }
        
        return obj;
    }

    public static generateFileChecksum(file: File): Observable<string> {
        const generator = new FileChecksumGenerator();
        return generator.execute(file);
    }

    public static isTextNumberOnly(text: string): boolean {
        return /^\d+$/.test(text);
    }

    public static isFileTypeImage(file: File): boolean {
        let validator = new FileValidator();
        return validator.isImage(file);
    }

    public static generateHexCodeFromNativeColor(color: string): string {
        if (color.startsWith("#")) {
            return color;
        }

        if (color === "red") {
            return "#FF0000";
        } else if (color === "yellow") {
            return "#FFFF00";
        } else if (color === "green") {
            return "#00FF00";
        } else if (color === "blue") {
            return "#0000FF";
        } else if (color === "purple") {
            return "#FF00FF";
        } else if (color === "white") {
            return "#fff";
        }

        return "#000";
    }
}

class FileValidator {
    isImage(file: File): boolean {
        const imageTypeList = [
            "image/png",
            "image/jpeg",
        ];

        return imageTypeList.includes(file.type);
    }
}

class FileChecksumGenerator {
    execute(file: File): Observable<string> {
        return this.readFileAndCalculateHash(file)
            .pipe(
                map((checksum) => checksum.toUpperCase())
            )
    }

    private readFileAndCalculateHash(blob: Blob): Observable<string> {
        return new Observable((observer) => {
            if (!(blob instanceof Blob)) {
                observer.error(
                    new Error("Failed to generate checksum due to invalid file")
                );
                return;
            }

            const reader = new FileReader();

            reader.onerror = (e) => observer.error(e);
            reader.onload = () => {
                observer.next(this.calculateMd5(reader.result as string));
            }
            reader.onloadend = () => observer.complete();

            reader.readAsBinaryString(blob);

            return () => reader.abort();
        })
    }

    private calculateMd5(filestring: string): string {
        return MD5(CryptoJS.enc.Latin1.parse(filestring)).toString();
    }
}