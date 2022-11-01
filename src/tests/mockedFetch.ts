export const mockedFetch = <T extends any>(
    json: (path: string) => Promise<T>
) => {
    global.fetch = jest.fn((path) => {
        return Promise.resolve({
            ok: true,
            json: () => json(path),
        });
    }) as jest.Mock;
};
