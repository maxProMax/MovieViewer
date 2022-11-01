type Storage = 'local' | 'session';

const getStorage = (type: Storage) =>
    type === 'local' ? localStorage : sessionStorage;

export const getItem = (key: string, type: Storage = 'local') => {
    const storage = getStorage(type);
    const item = storage.getItem(key) || null;

    try {
        return item && JSON.parse(item);
    } catch (error) {
        return item;
    }
};

export const setItem = <T extends any>(
    key: string,
    value: T,
    type: Storage = 'local'
) => {
    const storage = getStorage(type);
    let item: string;

    if (typeof value === 'object') {
        item = JSON.stringify(value);
    } else {
        item = String(value);
    }

    storage.setItem(key, item);
};
