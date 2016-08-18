import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticateService { 
    isAuth(uname: string, upass: string) {
        if(uname === 'Utkarsh' && upass ==='karma') 
            return true;
        else
            return false;
    }

}
