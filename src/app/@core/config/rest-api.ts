import { url } from "inspector";

import { baseUrl } from './config'


let env = baseUrl.prod

export const restUrl= {

   login:''+env+'api/auth/login'

}