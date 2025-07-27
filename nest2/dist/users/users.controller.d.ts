import { UsersService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getUsers(): Promise<{
        users: {
            id: number;
            name: string;
            email: string;
        }[];
    }>;
    createUser(body: {
        name: string;
        email: string;
    }): Promise<{
        id: number;
        name: string;
        email: string;
    }>;
}
