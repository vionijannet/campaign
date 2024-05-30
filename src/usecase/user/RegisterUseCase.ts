import { FieldError } from "@/entity/BaseResp";
import { RegisterReq } from "@/entity/user/RegisterReq";
import { RegisterResp } from "@/entity/user/RegisterResp";
import { UserService } from "@/service/UserService";
import { Observable } from "rxjs";

export interface RegisterUseCase {
    validate(template: RegisterReq): FieldError[];
    execute(template: RegisterReq): Observable<RegisterResp>
}

export class RegisterUseCaseImpl implements RegisterUseCase {
    constructor(private userService: UserService) {}

    validate(template: RegisterReq): FieldError[] {
        const error: FieldError[] = [];

        if (template.username.trim().length < 1) {
            error.push({
                field: "username",
                message: ["Required"]
            });
        }

        if (template.full_name.trim().length < 1) {
            error.push({
                field: "full_name",
                message: ["Required"]
            });
        }

        if (template.email.trim().length < 1) {
            error.push({
                field: "email",
                message: ["Required"]
            });
        }

        if (template.password.trim().length < 1) {
            error.push({
                field: "password",
                message: ["Required"]
            });
        }

        if (template.phone_number.trim().length < 1) {
            error.push({
                field: "phone_number",
                message: ["Required"]
            });
        }

        return error;
    }

    execute(user: RegisterReq): Observable<RegisterResp> {
        return this.userService.register({...user});
    }
}