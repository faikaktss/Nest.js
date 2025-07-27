export declare class UsersService {
    private prisma;
    getUsers(): Promise<{
        id: number;
        name: string;
        email: string;
    }[]>;
    createUser(name: string, email: string): Promise<{
        id: number;
        name: string;
        email: string;
    }>;
}
