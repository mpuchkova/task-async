export function mock(ms: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

export function getData(): Promise<number[]> {
    return Promise.all([mock(100), mock(200), mock(300)]);
}

export async function catchException(): Promise<string | undefined> {
    return await Promise.reject(new Error('my error')).catch(
        (err) => err.message,
    );
}
