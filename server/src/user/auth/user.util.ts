export const getUserToken = (header: string) => header.replace('Bearer ', '');
export const getAuthHeader = (context: any) => context.req.get('Authorization');
