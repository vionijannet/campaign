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
}