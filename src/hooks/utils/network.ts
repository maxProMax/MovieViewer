import { useState } from 'react';

export const useFetch = <T extends (...params: any[]) => Promise<any>>(
    request: T
) => {
    const [loading, updateLoading] = useState<boolean>(false);
    const [state, updateState] = useState<Awaited<ReturnType<T>>>();
    const [error, setError] = useState<{
        errors: string[];
        url: string;
    } | null>(null);

    return {
        loading,
        state,
        error,
        request: async (
            ...params: Parameters<typeof request>
        ): Promise<Awaited<ReturnType<T>> | void> => {
            updateLoading(true);

            try {
                const data = await request(...params);
                updateState(data);
                updateLoading(false);
                return data;
            } catch (error) {
                setError(error as any);

                updateLoading(false);
            }
        },
    };
};
