import { FieldError } from "@/entity/BaseResp";
import { LoginReq } from "@/entity/user/LoginReq";
import { LoginResp } from "@/entity/user/LoginResp";
import { UserService } from "@/service/UserService";
import { Observable } from "rxjs";

export interface LoginUseCase {
    validate(template: LoginReq): FieldError[];
    execute(template: LoginReq): Observable<LoginResp>
}

export class LoginUseCaseImpl implements LoginUseCase {
    constructor(private userService: UserService) {}

    validate(template: LoginReq): FieldError[] {
        const error: FieldError[] = [];

        if (template.username.trim().length < 1) {
            error.push({
                field: "username",
                message: ["Required"]
            });
        }

        if (template.password.trim().length < 1) {
            error.push({
                field: "password",
                message: ["Required"]
            });
        }

        return error;
    }

    execute(user: LoginReq): Observable<LoginResp> {
        return this.userService.login({...user});
    }
}