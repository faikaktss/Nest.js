import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService {
    private prisma = new PrismaClient();

    async getUsers(){   
        return this.prisma.user.findMany();
    }
    
    async createUser(name:string,email:string){
        return this.prisma.user.create({data:{name,email}})
    }
}
