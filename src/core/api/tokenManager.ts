let accessToken: string | null = null;

export const tokenManager = {
    setToken: (token: string) => {
        accessToken = token;

    },
    getToken: () => accessToken,
    clearToken: () => {
        accessToken = null;
    },
};