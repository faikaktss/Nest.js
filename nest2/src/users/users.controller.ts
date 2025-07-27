import { Controller ,Get ,Post , Body,Render,Res} from '@nestjs/common';
import {UsersService} from './users.service';
import {Response} from 'express';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){};//service kısmını bu sayede kullanabiliyoruz

    @Get()
    @Render('index')
    async getUsers(){         
        const users = await this.userService.getUsers();
        return {users};
    }

    @Post()
    async createUser(@Body() body:{name:string; email: string},@Res() res:Response){  
        await this.userService.createUser(body.name,body.email);
        return res.redirect('/users');
    }
}   
